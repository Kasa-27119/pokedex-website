import {Routes, Route} from 'react-router-dom'

// import pages 
import HomePage from '../pages/HomePage'
import SinglePokemon from '../pages/SinglePokemon'

const Links = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/pokemon/' element={<SinglePokemon/>}/>
      </Routes>
    </div>
  )
}

export default Links
