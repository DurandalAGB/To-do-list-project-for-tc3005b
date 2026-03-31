import Button from '@mui/material/Button'

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Button variant="contained">Hola MUI!</Button>
      <Button variant="outlined" style={{ marginLeft: 16 }}>Cancelar</Button>
      <Button variant="contained" color="error" style={{ marginLeft: 16 }}>Eliminar</Button>
    </div>
  )
}

export default App