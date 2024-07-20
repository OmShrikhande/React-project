import { useState } from 'react'
import be from './assets/black-eagle.jpg'
import { CORE_CONCEPTS } from './data.js'
import CoreConcepts from './Components/CoreConcepts.jsx'
import Header from './Components/Header'
import './App.css'
import TabButton from './Components/TabButton.jsx'


const reactDesciption = ['Fundamental','Crucial', 'core'] 
// this is the code to generate the random number
function genranodm(max){
  return Math.floor(Math.random() * (max + 1));
}

// 



function App() {


  const [count, setCount] = useState(0)
  const description =reactDesciption[genranodm(2)]

  let tabContent = 'please click a button'


  function handelSelect(selectedButton){
    tabContent = selectedButton;
    console.log(selectedButton);
  }

  return (
    <>
      <Header />
      <h1>Om Shrikhande</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         This is react {description} the app made by Mr. Om Shrikhande this is his first app
        </p>
      </div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts title="Components"  description="the core ui building block" image={be}/>
          <CoreConcepts title="Components1" description="the core ui building block" image={be}/>
          <CoreConcepts title="Components2" description="the core ui building block" image={be}/>
          <CoreConcepts title="Components3" description="the core ui building block" image={be}/>
        </ul>
      </section>
      <section id="core-concepts">
        <h2>Core Concepts with Data.js</h2>
        <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
          <CoreConcepts /*this is by the spread operator*/{...CORE_CONCEPTS[3]} /> 
        </ul>
      </section>

      {/* code below is the example of the children Props */}
      <section id ="TabButton">
        <h2>Examples</h2>
       
          <menu>
            <TabButton onSelect={() => handelSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handelSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handelSelect('childrenprop')}>children props</TabButton>
            <TabButton onSelect={() => handelSelect('state')}>state</TabButton>
          </menu>
{/* passing function handelSelect as a value */}
         {tabContent}
       
      </section>
    </>
  )
}

export default App
