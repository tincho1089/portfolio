import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RoutesManager } from './components'
import { RoutesWithNotFound } from './utilities'
const Home = lazy(() => import('./pages/Home/Home'))

function App() {
  return (
    <div className='App'>
      <RoutesManager>
        <RoutesWithNotFound>
          <Route path='/' element={<Home />} />
        </RoutesWithNotFound>
      </RoutesManager>
    </div>
  )
}

export default App
