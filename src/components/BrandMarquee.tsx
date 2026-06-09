import { brandRows } from '../data/content'
import './BrandMarquee.css'

export function BrandMarquee() {
  return (
    <section id="context" className="brand-marquee">
      <div className="brand-marquee__container">
        <div className="brand-marquee__header">
          <p className="brand-marquee__eyebrow">Selected environments</p>
        </div>

        <div className="brand-marquee__rows">
          {brandRows.map((row, rowIndex) => (
            <div
              key={`brand-row-${rowIndex}`}
              className="brand-marquee__row"
            >
              {row.map((brand) => (
                <a
                  key={brand.id}
                  className="brand-marquee__item"
                  href={`#${brand.experienceId}`}
                  title={`${brand.name} experience`}
                >
                  {brand.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        <p className="brand-marquee__disclaimer">
          Professional experience context only. No endorsement or affiliation implied.
        </p>
      </div>
    </section>
  )
}
