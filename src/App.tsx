import { useState } from 'react'
import CreateListModal from './components/ui/CreateListModal'
import Button from './components/ui/Button'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        + Create New List
      </Button>
      <CreateListModal
        open={open}
        onCancel={() => setOpen(false)}
        onCreate={(data) => {
          console.log('created:', data);
          setOpen(false);
        }}
      />
    </div>
  )
}

export default App