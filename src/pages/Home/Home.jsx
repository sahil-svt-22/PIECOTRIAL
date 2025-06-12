"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Home.css"
import heroImage from "../../../Assets/heroImage.jpeg"
import LazyImage from "../../components/LazyImage/LazyImage"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { SkeletonCard, SkeletonText } from "../../components/SkeletonLoader/SkeletonLoader"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
	const heroRef = useRef(null)
	const headingRef = useRef(null)
	const sectionRefs = useRef([])
	const [servicesLoading, setServicesLoading] = useState(true)
	const [aboutLoading, setAboutLoading] = useState(true)

	useEffect(() => {
		// Simulate content loading
		const servicesTimer = setTimeout(() => {
			setServicesLoading(false)
		}, 1000)

		const aboutTimer = setTimeout(() => {
			setAboutLoading(false)
		}, 1500)

		return () => {
			clearTimeout(servicesTimer)
			clearTimeout(aboutTimer)
		}
	}, [])

	useEffect(() => {
		// Hero animation with GSAP
		if (headingRef.current) {
			gsap.fromTo(
				headingRef.current.querySelectorAll(".hero-heading-line"),
				{
					y: 100,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.2,
					duration: 1,
					ease: "power3.out",
				},
			)
		}

		// Scroll animations
		sectionRefs.current.forEach((section, index) => {
			if (section) {
				gsap.fromTo(
					section,
					{
						y: 100,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 1,
						scrollTrigger: {
							trigger: section,
							start: "top 80%",
							end: "bottom 20%",
							toggleActions: "play none none none",
						},
					},
				)
			}
		})
	}, [servicesLoading, aboutLoading])

	return (
		<div className="home-page">
			<section className="hero" ref={heroRef}>
				<div className="hero-overlay"></div>
				<LazyImage
					className="hero-image"
					width="100%"
					height="100vh"
				/>
				<div className="hero-content">
					<div className="hero-heading" ref={headingRef}>
						<h1>
							<div className="hero-heading-line">Precision</div>
							<div className="hero-heading-line">Engineering &</div>
							<div className="hero-heading-line">Planning</div>
						</h1>
					</div>
					<motion.div
						className="hero-cta"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.5 }}
					>
						<button className="btn-primary">Discover Our Capabilities</button>
					</motion.div>
				</div>
			</section>

			<section className="services section" ref={(el) => (sectionRefs.current[0] = el)}>
				<div className="container">
					<h2 className="section-title">Our Services</h2>
					<div className="services-grid">
						{servicesLoading ? (
							Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
						) : (
							<>
								<motion.div
									className="service-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
								>
									<div className="service-icon">
										<i className="icon-electric"></i>
									</div>
									<h3>Electrical Contracting Services</h3>
									<p>
										Comprehensive electrical design and installation solutions for industrial, commercial, and infrastructure projects, ensuring safety and reliability.
									</p>
								</motion.div>

								<motion.div
									className="service-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									<div className="service-icon">
										<i className="icon-fire"></i>
									</div>
									<h3>Plumbing & Fire Fighting Solutions</h3>
									<p>
										End-to-end plumbing and fire suppression systems for seamless utility distribution and building safety compliance.
									</p>
								</motion.div>

								<motion.div
									className="service-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<div className="service-icon">
										<i className="icon-cleanroom"></i>
									</div>
									<h3>Turnkey Clean Room Solutions</h3>
									<p>
										Design and implementation of ISO-classified clean rooms with controlled environments for pharmaceutical, biotech, and electronic industries.
									</p>
								</motion.div>

								<motion.div
									className="service-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
								>
									<div className="service-icon">
										<i className="icon-hvac"></i>
									</div>
									<h3>Turnkey HVAC Solutions</h3>
									<p>
										Energy-efficient heating, ventilation, and air conditioning systems tailored for optimal comfort and operational efficiency.
									</p>
								</motion.div>

								<motion.div
									className="service-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
								>
									<div className="service-icon">
										<i className="icon-panel"></i>
									</div>
									<h3>Medical Isolation Panel</h3>
									<p>
										Custom-built panels designed for hospital environments to manage power distribution and monitoring in isolated medical zones.
									</p>
								</motion.div>

								<motion.div
									className="service-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 }}
								>
									<div className="service-icon">
										<i className="icon-surgeon"></i>
									</div>
									<h3>Smart Surgeon Control Panel</h3>
									<p>
										Advanced integrated control panels for operation theaters with intuitive interfaces to manage lighting, environment, and communications.
									</p>
								</motion.div>
							</>
						)}
					</div>
				</div>
			</section>


			<section className="about-preview section" ref={(el) => (sectionRefs.current[1] = el)}>
				<div className="container">
					<div className="about-preview-content">
						<div className="about-preview-text">
							<h2 className="section-title">About Pieco India Engineering</h2>
							{aboutLoading ? (
								<div className="about-loading">
									<SkeletonText lines={4} />
									<div style={{ marginTop: "20px" }}>
										<LoadingSpinner size="small" />
									</div>
								</div>
							) : (
								<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
									<p>
										Founded in 1983, Pieco Group is being acknowledged as one of the most respected name in the field of Electrical Equipment and Engineering Services. We are one of the leading trunkey Electrical & ELV Contractors, Manufacturer of LT Panels & Medical Isolation Panels.
									</p>
									<p>
										Everyone knows the better product or service will win in market place. The search to make product and service better leads to quality. And that’s why we have this mission of WINNING THROUGH QUALITY.
									</p>
									<button className="btn-secondary">Learn More About Us</button>
								</motion.div>
							)}
						</div>
						<div className="about-preview-image">
							<LazyImage

								className="about-image"
								width="100%"
								height="300px"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="cta-section section" ref={(el) => (sectionRefs.current[2] = el)}>
				<div className="container">
					<div className="cta-content">
						<h2>Ready to Start Your Project?</h2>
						<p>Contact us today to discuss how Pieco India Engneering Co. Pvt Ltd can help bring your vision to life.</p>
						<button className="btn-primary">Contact Us</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
