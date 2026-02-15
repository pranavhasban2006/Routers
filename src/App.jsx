import { useState } from 'react'

import Header from './componenets/heeader/Header.jsx'
import Footer from './componenets/footer/Footer.jsx'
import Home from './componenets/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer/>
    <Home/>
  
    </>
  )
}

export default App
