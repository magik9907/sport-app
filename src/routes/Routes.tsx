import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Team from '../pages/Team'
import Player from '../pages/Player'
import League from '../pages/League'
import Wrapper from '../components/Wrapper'
import Error404 from '../pages/Error404'

const Routes = () => {
	const routes = [
		{
			path: '/team/:id',
			component: Team
		},
		{
			path: '/team',
			component: Team
		},
		{
			path: '/league/:id',
			component: League
		},
		{
			path: '/league',
			component: League
		},
		{
			path: '/player/:id',
			component: Player
		},
		{
			path: '/player',
			component: Player
		},
		{
			path: '/',
			component: Home
		}
	]
	return (
		<Router>
			<Wrapper>
				<Switch>
					{routes.map((route, index) => <Route {...route} key={index} />)}
					<Route component={Error404} />
				</Switch>
			</Wrapper>
		</Router>
	)
}

export default Routes
