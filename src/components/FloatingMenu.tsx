import { useEffect, useRef, useState } from 'react'
import './FloatingMenu.css'

interface MenuItem {
  label: string
  href: string
  external?: boolean
}

interface FloatingMenuProps {
  items: MenuItem[]
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function FloatingMenu({ items, theme, onToggleTheme }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        ref={triggerRef}
        className="nav-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        title="Open menu"
      >
        <span className="nav-trigger__icon" aria-hidden="true">
          &gt;_
        </span>
      </button>

      {isOpen && (
        <div className="nav-backdrop" onClick={handleBackdropClick}>
          <div className="nav-drawer" ref={drawerRef} role="dialog" aria-label="Navigation menu">
            <header className="nav-drawer__header">
              <div className="nav-drawer__header-text">
                <h2 className="nav-drawer__title">Command</h2>
                <p className="nav-drawer__subtitle">Work / Contact info</p>
              </div>
              <button
                className="nav-drawer__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="nav-drawer__content">
              <nav className="nav-section">
                <h3 className="nav-section__title">Menu</h3>
                <ul className="nav-section__list">
                  {items.map((item, index) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="nav-item"
                        onClick={handleNavClick}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                      >
                        <span className="nav-item__icon">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="nav-item__label">{item.label}</span>
                        <span className="nav-item__arrow" aria-hidden="true">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="nav-section">
                <h3 className="nav-section__title">Settings</h3>
                <ul className="nav-section__list">
                  <li>
                    <button
                      className="nav-item"
                      onClick={() => {
                        onToggleTheme()
                        setIsOpen(false)
                      }}
                    >
                      <span className="nav-item__icon">{theme === 'dark' ? '☾' : '☀'}</span>
                      <span className="nav-item__label">Theme</span>
                      <span className="nav-item__hint">{theme === 'dark' ? 'Dark' : 'Light'}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
