import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="Ayush" age={20}/>
      <Product name="Samsung S20" price="$500"/>
    </div>
  )
}

export default App