import Button from './components/ui/Button'

function App() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Button variant="primary">Add to list</Button>
      <Button variant="secondary">+ Create New List</Button>
      <Button variant="cancel">Cancel</Button>
      <Button variant="delete">Delete</Button>
      <Button variant="pill">Load more results</Button>
    </div>
  )
}

export default App