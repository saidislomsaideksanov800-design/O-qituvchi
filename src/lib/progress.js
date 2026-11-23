import { useSyncExternalStore } from 'react'
import site from '../data/site.js'
import { storage } from './utils.js'

// Lesson progress, saved in the browser (localStorage).
// Shape: { "3-math-2": { passed: true, best: 5, total: 5, attempts: 2, date: "2026-11-23" } }

const KEY = 'darsim-progress-v1'
const EMPTY = {}
let cache = null
const listeners = new Set()

function load() {
  if (cache) return cache
  try {
    cache = JSON.parse(storage.get(KEY) || '{}') || {}
  } catch {
    cache = {}
  }
  return cache
}

function save(next) {
  cache = next
  storage.set(KEY, JSON.stringify(next))
  listeners.forEach((fn) => fn())
}

const subscribe = (fn) => {
  listeners.add(fn)
  // Keep tabs in sync (e.g. parent resets progress in another tab).
  const onStorage = (e) => { if (e.key === KEY) { cache = null; fn() } }
  window.addEventListener('storage', onStorage)
  return () => { listeners.delete(fn); window.removeEventListener('storage', onStorage) }
}

export function useProgress() {
  return useSyncExternalStore(subscribe, load, () => EMPTY)
}

export const lessonKey = (g, s, i) => `${g}-${s}-${i}`

// Minimum correct answers needed for a test with n questions.
export const required = (n) => Math.ceil(n * site.passRatio)

// A lesson is open if it is the first one, or the previous lesson's test was passed.
export function isUnlocked(progress, g, s, i) {
  return i === 1 || Boolean(progress[lessonKey(g, s, i - 1)]?.passed)
}

export function recordAttempt(g, s, i, correct, total) {
  const all = load()
  const key = lessonKey(g, s, i)
  const prev = all[key] || { passed: false, best: 0, attempts: 0 }
  const passed = prev.passed || correct >= required(total)
  save({
    ...all,
    [key]: {
      passed,
      best: Math.max(prev.best || 0, correct),
      total,
      attempts: (prev.attempts || 0) + 1,
      date: new Date().toISOString().slice(0, 10),
    },
  })
  return correct >= required(total)
}

export function resetProgress() {
  storage.remove(KEY)
  save({})
}
