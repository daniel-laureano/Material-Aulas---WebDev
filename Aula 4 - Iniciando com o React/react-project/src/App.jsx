import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header 
        titulo="Gui Negão"
        texto="Texto 1"
        cor="red"/>
      <Header 
        titulo="Matheuzinho"
        texto="Texto 2"
        cor="yellow"/>
      <Header 
        titulo="Hugo Souza"
        texto="Texto 3"
        cor="blue"/>
    </>
  )
}

export default App
