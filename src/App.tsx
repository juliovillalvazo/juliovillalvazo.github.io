import { BrandMarquee } from './components/BrandMarquee'
import { ExperienceSection } from './components/ExperienceSection'
import { FloatingMenu } from './components/FloatingMenu'
import { PixelHeadphonesSection } from './components/PixelHeadphonesSection'
import { TerminalHero } from './components/TerminalHero'
import './App.css'
import { projects, stackGroups, aboutCards, contactLinks } from './data/content'
import { useThemePreference } from './hooks/useThemePreference'

function App() {
  const { theme, toggleTheme } = useThemePreference()

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'About', href: '#about' },
    { label: 'Links', href: '#links' },
    {
      label: 'Schedule a Call',
      href: 'mailto:juliovillalvazo26@gmail.com?subject=Schedule%20a%20Call',
      external: true,
    },
    { label: 'Resume', href: '#links' },
    { label: 'GitHub', href: 'https://github.com/juliovillalvazo', external: true },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/juliovillalvazo',
      external: true,
    },
  ]

  return (
    <>
      <FloatingMenu items={menuItems} theme={theme} onToggleTheme={toggleTheme} />

      <main className="page-shell">
        <TerminalHero />
        <PixelHeadphonesSection />
        <BrandMarquee />
        <ExperienceSection />

        <section id="projects" className="projects-section">
          <div className="projects-section__container">
            <div className="projects-section__intro">
              <p className="projects-section__eyebrow">Selected technical work</p>
              <h2 className="projects-section__title">Public builds and engineering notes</h2>
            </div>

            <div className="projects-section__grid">
              {projects.map((project) => (
                <article key={project.id} className="project-card">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__stack">
                    {project.stack.map((item) => (
                      <span key={item} className="project-card__stack-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tech-stack" className="tech-stack-section">
          <div className="tech-stack-section__container">
            <div className="tech-stack-section__intro">
              <p className="tech-stack-section__eyebrow">Capabilities</p>
              <h2 className="tech-stack-section__title">Systems view of the stack</h2>
            </div>

            <div className="tech-stack-section__grid">
              {stackGroups.map((group) => (
                <article key={group.title} className="capability-card">
                  <h3 className="capability-card__title">{group.title}</h3>
                  <p className="capability-card__description">{group.description}</p>
                  <div className="capability-card__items">
                    {group.items.map((item) => (
                      <span key={item} className="capability-card__item">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-section__container">
            <div className="about-section__intro">
              <p className="about-section__eyebrow">About</p>
              <h2 className="about-section__title">
                I like building systems that feel clear on the surface and disciplined underneath
              </h2>
              <p className="about-section__summary">
                Interfaces, services, tests, cloud workflows, and the small decisions that keep
                products maintainable. Started from Mechatronics Engineering, moved through
                frontend, backend, cloud, and distributed systems. Currently working on audio
                platforms, AI validation, fraud detection, and secure cloud infrastructure.
              </p>
            </div>

            <div className="about-section__grid">
              {aboutCards.map((card) => (
                <article key={card.title} className="about-card">
                  <h3 className="about-card__title">{card.title}</h3>
                  <p className="about-card__description">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="links" className="contact-section">
          <div className="contact-section__container">
            <div className="contact-section__intro">
              <p className="contact-section__eyebrow">Let's connect</p>
              <h2 className="contact-section__title">Open to remote engineering opportunities</h2>
              <p className="contact-section__summary">
                If my experience in frontend systems, backend services, cloud platforms, or AI
                workflows fits what you're building, I'd be happy to connect.
              </p>
            </div>

            <div className="contact-section__grid">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  className="contact-card"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  <h3 className="contact-card__title">{link.title}</h3>
                  <p className="contact-card__description">{link.description}</p>
                  <span className="contact-card__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
