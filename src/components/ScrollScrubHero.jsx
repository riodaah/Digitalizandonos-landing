import { useEffect, useRef } from 'react'
import styles from './ScrollScrubHero.module.css'

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

const ScrollScrubHero = ({ onProgressChange }) => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const rafRef = useRef(0)
  const tickingRef = useRef(false)
  const visibleRef = useRef(false)
  const lastTimeRef = useRef(-1)
  const pendingTimeRef = useRef(null)
  const reportedProgressRef = useRef(-1)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    video.pause()
    video.muted = true
    video.playsInline = true

    const notifyProgress = (progress) => {
      if (typeof onProgressChange !== 'function') return
      if (Math.abs(progress - reportedProgressRef.current) < 0.005) return
      reportedProgressRef.current = progress
      onProgressChange(progress)
    }

    const getProgress = () => {
      const rect = section.getBoundingClientRect()
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1)
      return clamp(-rect.top / scrollable, 0, 1)
    }

    const applyProgress = (progress) => {
      notifyProgress(progress)

      if (
        video.readyState >= 1 &&
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        const nextTime = progress * video.duration
        pendingTimeRef.current = nextTime
        if (!video.seeking && Math.abs(nextTime - lastTimeRef.current) > 0.012) {
          lastTimeRef.current = nextTime
          video.currentTime = nextTime
        }
      }

      if (!video.paused) video.pause()
    }

    const updateFromScroll = (force = false) => {
      tickingRef.current = false
      if (!visibleRef.current && !force) return
      applyProgress(getProgress())
    }

    const onScroll = () => {
      if (!visibleRef.current || tickingRef.current) return
      tickingRef.current = true
      rafRef.current = requestAnimationFrame(updateFromScroll)
    }

    const bindScroll = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
      onScroll()
    }

    const unbindScroll = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      tickingRef.current = false
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) bindScroll()
        else {
          unbindScroll()
          updateFromScroll(true)
        }
      },
      { threshold: 0 }
    )
    observer.observe(section)

    const onLoaded = () => {
      video.pause()
      updateFromScroll(true)
    }
    const forcePause = () => { video.pause() }
    const onSeeked = () => {
      const pending = pendingTimeRef.current
      if (pending == null || Math.abs(pending - lastTimeRef.current) <= 0.012) return
      lastTimeRef.current = pending
      video.currentTime = pending
    }
    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('playing', forcePause)
    video.addEventListener('seeked', onSeeked)

    const unlockSeek = () => {
      const playAttempt = video.play()
      if (playAttempt) {
        playAttempt.then(() => {
          video.pause()
        }).catch(() => {})
      }
    }
    window.addEventListener('pointerdown', unlockSeek, { once: true, passive: true })
    window.addEventListener('touchstart', unlockSeek, { once: true, passive: true })
    window.addEventListener('wheel', unlockSeek, { once: true, passive: true })
    updateFromScroll(true)

    return () => {
      observer.disconnect()
      unbindScroll()
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('playing', forcePause)
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('pointerdown', unlockSeek)
      window.removeEventListener('touchstart', unlockSeek)
      window.removeEventListener('wheel', unlockSeek)
      video.pause()
    }
  }, [onProgressChange])

  return (
    <section
      id="home"
      ref={sectionRef}
      className={styles.section}
      aria-label="Presentación principal de Digitalizándonos"
    >
      <div className={styles.sticky}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/herov2.mp4"
          muted
          playsInline
          preload="auto"
          autoPlay={false}
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

export default ScrollScrubHero
