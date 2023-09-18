import { Greetings } from 'kan-mantine-components'
import { Cards } from 'kan-mantine-components'

import { Button } from '@mantine/core'
import './App.css'

function App() {
  const cardsData = [
    { title: 'Nombre de la capa',
    category: 'categoria',
    options : [
      {
        icon: "faDownload",
        onClick: () => console.log('download')
      },
      {
        icon: "faExclamationCircle",
        onClick: () => console.log('info')
      },
      {
        icon: "faBars",
        onClick: () => console.log('info')
      },
      {
        icon: "faGear",
        onClick: () => console.log('config')
      },
    ]
  },
  { title: 'capacidad',
    category: 'categoria superficie',
    options : [
      {
        icon: "faDownload",
        onClick: () => console.log('download')
      },
     
      { 
        icon: "faGear",
        onClick: () => console.log('config')
      }
    ]
  },
  { title: 'capa lineal',
    category: 'bajada'
  },
  { title: 'capa',
    category: 'base'
  },
  { title: 'Nombre',
    category: 'category'
  }
  ]; 

  return (
    <>
      <div className='App'>
      <Cards data={cardsData}/>
    </div>
      <Button 
       >ENTER
      </Button>
      <h1>Hola </h1>
      <Greetings />
    </>
  );
}

export default App
