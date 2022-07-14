/** @format */

import React from 'react'
import { Header } from './components/Header/Header'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Hero } from './components/Hero/Hero'
import { Menu } from './components/Menu/Menu'
import { Footer } from './components/Footer/Footer'

function App() {
	return (
		<div className="site">
			<Router>
				<Header />
				<Hero />
				<Menu />
				<Footer />
			</Router>
		</div>
	)
}

export default App
