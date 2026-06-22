import { FloatingMenu } from './components/FloatingMenu'
import { TerminalHero } from './components/TerminalHero'
import { WorkWindows } from './components/WorkWindows'
import './App.css'
import { contactLinks } from './data/content'
import { useThemePreference } from './hooks/useThemePreference'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Contact info', href: '#contact-info' },
  {
    label: 'GitHub',
    href: 'https://github.com/juliovillalvazo',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juliovillalvazo',
    external: true,
  },
]

function App() {
  const { theme, toggleTheme } = useThemePreference()

  return (
    <>
      <nav className="top-pill-nav" aria-label="Primary navigation">
        <a href="#work" className="top-pill-nav__item">
          Work
        </a>
        <a href="#contact-info" className="top-pill-nav__item">
          Contact info
        </a>
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="theme-toggle__icon" aria-hidden="true">
          {theme === 'dark' ? '☀' : '☾'}
        </span>
        <span className="theme-toggle__label">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      </button>

      <FloatingMenu
        items={navItems}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="page-shell">
        <TerminalHero />
        <WorkWindows />
      </main>

      <footer id="contact-info" className="contact-footer">
        <div className="contact-footer__container">
          <div className="contact-footer__intro">
            <p className="contact-footer__eyebrow">Contact info</p>
            <h2 className="contact-footer__title">Let&apos;s build something clear and useful.</h2>
            <p className="contact-footer__summary">
              Open to software engineering work across frontend systems,
              backend services, cloud platforms, and AI workflows.
            </p>
          </div>

          <div className="contact-footer__grid">
            {contactLinks
              .map((link) => (
                <a
                  key={link.id}
                  className="contact-footer__link"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  download={link.id === 'resume' ? 'CV_JulioVillalvazo_2026.pdf' : undefined}
                >
                  <span className="contact-footer__link-title">{link.title}</span>
                  <span className="contact-footer__link-description">{link.description}</span>
                </a>
              ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
