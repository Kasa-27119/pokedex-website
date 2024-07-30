import { HashRouter } from 'react-router-dom'
import './App.css'
// import nav components
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Links from './routes/Links'
// import pokecontext
import { PokeContextProvider } from './context/PokeContext'
const App = () => {
  

  return (
    <>
      <HashRouter>
        <PokeContextProvider>
          <Header></Header>
          <Links></Links>
          <Footer></Footer>
        </PokeContextProvider>
      </HashRouter>
    </>
  )
}

export default App
