import { useMemo, useState } from 'react'
import resumePdf from '../assets/CV_JulioVillalvazo_2026.pdf?url'
import { useTypingText } from '../hooks/useTypingText'
import './TerminalHero.css'

export function TerminalHero() {
  const [isGlitching, setIsGlitching] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const { displayedText, isComplete } = useTypingText({
    text: 'Julio Villalvazo',
    speed: 75,
    startDelay: 600,
    enabled: !prefersReducedMotion,
  })

  const handleClose = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 400)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section id="home" className="terminal-hero">
      <div className="terminal-hero__backdrop" aria-hidden="true">
        <div className="terminal-hero__noise" />
        <div className="terminal-hero__glow" />
        <div className="terminal-hero__grid" />
        <div className="terminal-hero__signal-lines">
          <span className="terminal-hero__signal-line terminal-hero__signal-line--one" />
          <span className="terminal-hero__signal-line terminal-hero__signal-line--two" />
        </div>
      </div>

      <div className="terminal-hero__container">
        <div
          className={`terminal-hero__window ${isGlitching ? 'terminal-hero__window--glitch' : ''} ${isExpanded ? 'terminal-hero__window--expanded' : ''}`}
        >
          <div className="terminal-hero__window-bar">
            <div className="terminal-hero__window-dots">
              <button
                className="terminal-hero__window-dot terminal-hero__window-dot--red"
                onClick={handleClose}
                aria-label="Close"
                type="button"
              >
                <span className="terminal-hero__window-dot-tooltip">Close</span>
              </button>
              <button
                className="terminal-hero__window-dot terminal-hero__window-dot--yellow"
                onClick={handleMinimize}
                aria-label="Minimize"
                type="button"
              >
                <span className="terminal-hero__window-dot-tooltip">Minimize</span>
              </button>
              <button
                className="terminal-hero__window-dot terminal-hero__window-dot--green"
                onClick={handleExpand}
                aria-label="Expand"
                type="button"
              >
                <span className="terminal-hero__window-dot-tooltip">Expand</span>
              </button>
            </div>
            <div className="terminal-hero__window-title">julio.dev</div>
          </div>

          <div className="terminal-hero__window-content">
            {/* Accessible final text for screen readers */}
            <div className="visually-hidden">
              <h1>Julio Villalvazo - Full-Stack Software Engineer</h1>
              <p>Frontend, Backend, DevOps, AWS, Banking and streaming platforms</p>
            </div>

            {/* Visual typing animation */}
            <p className="terminal-hero__command" aria-hidden="true">
              <span className="terminal-hero__prompt">&gt;</span>
              <span className="terminal-hero__typed">{displayedText}</span>
              <span
                className={`terminal-hero__cursor ${isComplete || prefersReducedMotion ? 'terminal-hero__cursor--blinking' : ''}`}
              >
                _
              </span>
            </p>

            <div
              className={`terminal-hero__output ${isMinimized ? 'terminal-hero__output--minimized' : ''} ${isComplete || prefersReducedMotion ? 'terminal-hero__output--visible' : ''}`}
              aria-hidden="true"
            >
              <h2 className="terminal-hero__role">Full-Stack Software Engineer</h2>
              <p className="terminal-hero__domains">
                Frontend · Backend · DevOps · AWS · Banking and streaming platforms
              </p>
              <div className="terminal-hero__links">
                <a
                  href="https://github.com/juliovillalvazo"
                  className="terminal-hero__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/juliovillalvazo"
                  className="terminal-hero__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={resumePdf}
                  className="terminal-hero__link"
                  download="CV_JulioVillalvazo_2026.pdf"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#work"
          className={`terminal-hero__scroll-hint ${isComplete || prefersReducedMotion ? 'terminal-hero__scroll-hint--visible' : ''}`}
        >
          <span>Scroll to continue</span>
          <span className="terminal-hero__scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  )
}
