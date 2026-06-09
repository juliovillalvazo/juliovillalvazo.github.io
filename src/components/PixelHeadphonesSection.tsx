import './PixelHeadphonesSection.css'
import { PixelHeadphones } from './PixelHeadphones'

export function PixelHeadphonesSection() {
  return (
    <section id="signature" className="pixel-headphones-section">
      <div className="pixel-headphones-section__container">
        <div className="pixel-headphones-section__intro">
          <p className="pixel-headphones-section__eyebrow">Signature</p>
          <h2 className="pixel-headphones-section__title">From signal to sound</h2>
        </div>

        <div className="pixel-headphones-section__stage" aria-hidden="true">
          <PixelHeadphones />
        </div>

        <p className="pixel-headphones-section__caption">
          Audio systems, synchronization, and focus
        </p>
      </div>
    </section>
  )
}
