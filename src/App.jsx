"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.css"

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import PageLoader from "./components/PageLoader/PageLoader"

// Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Capabilities from "./pages/Capabilities/Capabilities"
import Products from "./pages/Products/Products"
import Careers from "./pages/Careers/Careers"
import Contact from "./pages/Contact/Contact"

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// Simulate initial app loading
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<PageLoader isLoading={isLoading}>
			<Router>
				<div className="app">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/capabilities" element={<Capabilities />} />
						<Route path="/products" element={<Products />} />
						<Route path="/careers" element={<Careers />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</PageLoader>
	)
}

export default App
