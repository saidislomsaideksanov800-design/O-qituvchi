// Build step: put the pre-rendered page HTML into dist/index.html.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const ssrEntry = path.resolve(root, 'dist-ssr/entry-server.js')
const htmlFile = path.resolve(root, 'dist/index.html')

const { render } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(htmlFile, 'utf8')

if (!template.includes('<!--app-html-->')) throw new Error('Marker <!--app-html--> not found in dist/index.html')
fs.writeFileSync(htmlFile, template.replace('<!--app-html-->', render()))
fs.rmSync(path.resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log('✓ pre-rendered dist/index.html')
