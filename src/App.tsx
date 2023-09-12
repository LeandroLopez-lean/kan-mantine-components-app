import {Greetings} from 'kan-mantine-components'
import { Button } from '@mantine/core'
import './App.css'

function App() {

  return (
    <>
    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>ENTER</Button>
     <h1>Hola </h1>
     <Greetings />
    </>
  );
}

export default App
