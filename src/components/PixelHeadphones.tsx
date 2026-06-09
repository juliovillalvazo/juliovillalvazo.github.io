import './PixelHeadphones.css'

const HEADPHONE_PATTERN = [
  '........................',
  '.........######.........',
  '.......##########.......',
  '......############......',
  '.....####......####.....',
  '....###..........###....',
  '...###............###...',
  '...##..............##...',
  '..##................##..',
  '..##................##..',
  '..##................##..',
  '..##................##..',
  '..##................##..',
  '..##................##..',
  '..##................##..',
  '.###................###.',
  '.###................###.',
  '.###................###.',
  '.###................###.',
  '.#####............#####.',
  '.#####............#####.',
  '.#####............#####.',
  '.#####....####....#####.',
  '.#####...######...#####.',
  '..####...######...####..',
  '..####....####....####..',
  '...###............###...',
  '....##............##....',
  '........................',
]

export function PixelHeadphones() {
  const columns = HEADPHONE_PATTERN[0].length

  return (
    <div
      className="pixel-headphones"
      style={{ '--columns': columns } as React.CSSProperties}
      aria-hidden="true"
    >
      {HEADPHONE_PATTERN.flatMap((row, rowIndex) =>
        row.split('').map((cell, columnIndex) => {
          const isActive = cell === '#'

          return (
            <span
              key={`${rowIndex}-${columnIndex}`}
              className={isActive ? 'pixel active' : 'pixel'}
              style={
                {
                  '--delay': `${(rowIndex + columnIndex) * 18}ms`,
                  '--depth': `${0.55 + ((rowIndex + columnIndex) % 5) * 0.08}`,
                } as React.CSSProperties
              }
            />
          )
        })
      )}
    </div>
  )
}
