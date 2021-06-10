import { Route, Switch } from 'react-router-dom'
import AllmeetupsPages from './pages/Allmeetups'
import FavoritesPage from './pages/Favorites'
import NewmeetupsPage from './pages/Newmeetups'

function App () {
  return (
    <div>
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
    </div>
  )
}

export default App
