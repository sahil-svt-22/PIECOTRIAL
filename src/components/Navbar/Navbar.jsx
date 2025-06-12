"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import "./Navbar.css"
import logo1 from "../../../Assets/logo1.png";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		setIsMobileMenuOpen(false)
	}, [location])

	const navbarClass = isScrolled ? "navbar scrolled" : "navbar"

	return (
		<nav className={navbarClass}>
			<div className="navbar-container">
				<Link to="/" className="logo-container">
					<div className="logo" />

				</Link>

				<div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					<div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<motion.ul
					className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<li>
						<Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
							About
						</Link>
					</li>
					<li>
						<Link to="/capabilities" className={location.pathname === "/capabilities" ? "active" : ""}>
							Capabilities
						</Link>
					</li>
					<li>
						<Link to="/products" className={location.pathname === "/products" ? "active" : ""}>
							Products
						</Link>
					</li>
					<li>
						<Link to="/careers" className={location.pathname === "/careers" ? "active" : ""}>
							Careers
						</Link>
					</li>
					<li>
						<Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
							Contact
						</Link>
					</li>
				</motion.ul>
			</div>
		</nav>
	)
}

export default Navbar
