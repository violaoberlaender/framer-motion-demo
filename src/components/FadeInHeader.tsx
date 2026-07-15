import { motion } from 'framer-motion'

export default function FadeInHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1>Framer Motion Demo</h1>
      <p className="subtitle">
        Drei einfache Beispiele: Fade-in, Hover/Tap und animierte Listen.
      </p>
    </motion.div>
  )
}
