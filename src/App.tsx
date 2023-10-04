import { Greetings, Cards } from 'kan-mantine-components'
/* import { Cards } from 'kan-mantine-components' */
import { Button } from '@mantine/core'
import './App.css'

function App() {
 /*  const cardsData = [
    {
      title: 'Nombre de la capa',
      category: 'categoria',
      options: [
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
    {
      title: 'capacidad',
      category: 'categoria superficie',
      options: [
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
    {
      title: 'capa lineal',
      category: 'bajada'
    },
    {
      title: 'capa',
      category: 'base'
    },
    {
      title: 'Nombre',
      category: 'category'
    }
  ];
 */
  return (
    <>
    
      <Cards />

      <Button>ENTER</Button> 

      <h1>Hola </h1>

      <Greetings />
    {/*   
      {cardsData.map((card, index) => (
        <div key={index}>
          <h2>{card.title}</h2>
          <p>{card.category}</p>
          {card.options && (
            <ul>
              {card.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <i className={`fa ${option.icon}`} onClick={option.onClick}></i>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    }*/}
     
    </>
  );
}

export default App
