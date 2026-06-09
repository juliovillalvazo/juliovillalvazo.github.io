import { experiences } from '../data/content'
import './ExperienceSection.css'

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-section__intro">
        <p className="experience-section__eyebrow">Engineering experience</p>
        <h2 className="experience-section__title">Real work across audio, fraud, cloud, and platform systems</h2>
      </div>

      <div className="experience-section__grid">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            id={experience.id}
            className="experience-card"
          >
            <div className="experience-card__header">
              <h3 className="experience-card__company">{experience.company}</h3>
              <p className="experience-card__context">{experience.context}</p>
            </div>

            <p className="experience-card__summary">{experience.roleSummary}</p>

            <ul className="experience-card__highlights">
              {experience.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="experience-card__footer">
              <div className="experience-card__stack">
                {experience.stack.slice(0, 6).map((item) => (
                  <span key={item} className="experience-card__stack-item">{item}</span>
                ))}
              </div>
              
              <a 
                href={experience.website} 
                target="_blank" 
                rel="noreferrer"
                className="experience-card__link"
              >
                Visit site →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
