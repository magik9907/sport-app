import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Team from '../pages/Team'
import Player from '../pages/Player'
import League from '../pages/League'
import Wrapper from '../components/Wrapper'
import Error404 from '../pages/Error404'

const Routes = () => {
	return (
		<Router>
			<Wrapper>
				<Switch>
					<Route exact path="/team/:id">
						<Team />
					</Route>
					<Route exact path="/team">
						<Team />
					</Route>
					<Route exact path="/player/:id">
						<Player />
					</Route>
					<Route exact path="/player">
						<Player />
					</Route>
					<Route exact path="/league/:id">
						<League />
					</Route>
					<Route exact path="/league">
						<League />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<Error404 />
					</Route>
				</Switch>
			</Wrapper>
		</Router>
	)
}

export default Routes
