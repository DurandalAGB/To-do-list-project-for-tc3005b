import { useState } from 'react'
import ToggleCompleted from './components/ui/ToggleCompleted'

function App() {
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <div style={{ padding: 40 }}>
      <ToggleCompleted
        showCompleted={showCompleted}
        onToggle={setShowCompleted}
      />
      <p style={{ marginTop: 16 }}>
        {showCompleted ? 'Mostrando completadas' : 'Ocultando completadas'}
      </p>
    </div>
  )
}

export default App