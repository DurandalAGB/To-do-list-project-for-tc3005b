import { useState } from 'react'
import EditTaskModal from './components/ui/EditTaskModal'
import Button from './components/ui/Button'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Abrir Edit Modal
      </Button>
      <EditTaskModal
        open={open}
        initialTitle="Asymptotic Analysis Paper"
        initialDescription="Draft the first section covering Big O"
        initialDate="2024-10-24"
        initialPriority="high"
        onCancel={() => setOpen(false)}
        onSave={(data) => {
          console.log('saved:', data);
          setOpen(false);
        }}
      />
    </div>
  )
}

export default App