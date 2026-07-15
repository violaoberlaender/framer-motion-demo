import { motion } from 'framer-motion'

const tiles = ['React', 'Vite', 'TypeScript', 'Framer Motion']

export default function HoverTiles() {
  return (
    <section className="card">
      <h2>Hover & Tap</h2>
      <div className="grid">
        {tiles.map((label) => (
          <motion.div
            key={label}
            className="tile"
            whileHover={{ scale: 1.06, backgroundColor: 'rgba(124,92,255,0.35)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
