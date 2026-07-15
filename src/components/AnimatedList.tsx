import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

let nextId = 4

export default function AnimatedList() {
  const [items, setItems] = useState([
    { id: 1, label: 'Item eins' },
    { id: 2, label: 'Item zwei' },
    { id: 3, label: 'Item drei' },
  ])

  const addItem = () => {
    setItems((prev) => [...prev, { id: nextId, label: `Item ${nextId}` }])
    nextId += 1
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <section className="card">
      <h2>Animierte Liste</h2>
      <ul className="list">
        <AnimatePresence>
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
              onClick={() => removeItem(item.id)}
              style={{ cursor: 'pointer' }}
            >
              {item.label} (klicken zum Entfernen)
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <br />
      <button className="primary" onClick={addItem}>
        Item hinzufügen
      </button>
    </section>
  )
}
