import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Team from '../pages/Team'
import Player from '../pages/Player'
import League from '../pages/League'
import Teams from '../pages/Teams'
import Leagues from '../pages/Leagues'
import Wrapper from '../components/Wrapper'
import Error404 from '../pages/Error404'

const Routes = () => {
  const routes = [
    {
      path: '/team/:id',
      component: Team,
    },
    {
      path: '/teams',
      component: Teams,
    },
    {
      path: '/league/:id',
      component: League,
    },
    {
      path: '/leagues',
      component: Leagues,
    },
    {
      path: '/player/:id',
      component: Player,
    },
    {
      path: '/',
      component: Home,
    },
  ]
  return (
    <Router>
      <Wrapper>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Route component={Error404} />
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default Routes
