import { useEffect, useRef } from 'react'
import Button from './ui/Button.jsx'
import { Glyph, Icon3D } from './ui/Icon.jsx'
import { isPlaceholder } from '../lib/utils.js'

// YouTube player in a native <dialog>: Esc, focus trap and backdrop come for free.
export default function VideoModal({ video, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (video && !dialog.open) dialog.showModal()
    if (!video && dialog.open) dialog.close()
  }, [video])

  const hasVideo = video && !isPlaceholder(video.youtubeId)

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="video-dialog-title"
      onClose={onClose}
      // Click on the dark backdrop closes the dialog.
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      <div className="p-3">
        <div className="relative aspect-video overflow-hidden rounded-btn bg-gray-light">
          {hasVideo ? (
            // youtube-nocookie = privacy-friendly embed; only loads when opened.
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="ph ph-a grid place-items-center">
              <div className="relative z-10 grid justify-items-center gap-3 px-6 text-center text-sm text-slate">
                <Icon3D name="play" size={64} />
                <p>Video hali qo'shilmagan — <code>src/data/videos.js</code> faylida <code>youtubeId</code> ni yozing.</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-4 px-3 pb-1 pt-4">
          <h3 id="video-dialog-title" className="text-h4">{video?.title}</h3>
          <Button variant="glass" size="sm" onClick={() => ref.current?.close()}>
            Yopish <Glyph name="close" />
          </Button>
        </div>
      </div>
    </dialog>
  )
}
