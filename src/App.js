import { Route, Switch } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import AllmeetupsPages from './pages/Allmeetups'
import FavoritesPage from './pages/Favorites'
import NewmeetupsPage from './pages/Newmeetups'

function App () {
  return (
    <Layout>
      <Switch>
          <Route path='/' exact>
            <AllmeetupsPages />
          </Route>

          <Route path='/favorites'>
            <FavoritesPage />
          </Route>

          <Route path='/new-meet-up'>
            <NewmeetupsPage />
          </Route>
      </Switch>
    </Layout>
  )
}

export default App
