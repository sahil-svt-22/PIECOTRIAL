"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Capabilities.css"

gsap.registerPlugin(ScrollTrigger)

const Capabilities = () => {
	const sectionRefs = useRef([])

	useEffect(() => {
		// Scroll animations
		sectionRefs.current.forEach((section, index) => {
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
		})
	}, [])

	return (
		<div className="capabilities-page">
			<section className="page-header">
				<div className="page-header-overlay"></div>
				<div className="page-header-content">
					<h1>Our Capabilities</h1>
					<p>Discover the full range of precision engineering and MEP Services we offer</p>
				</div>
			</section>

			<section className="capabilities-intro section" ref={(el) => (sectionRefs.current[0] = el)}>
				<div className="container">
					<h2 className="section-title">What We Do</h2>
					<p className="section-description">
						At Pieco India Engineering Co. Pvt Ltd, We Have an Awesome Highly Skilled Team
						The most respected name in the field of Electrical Equipment and Engineering Services.
						We are one of the leading Trunkey Electrical & ELV Contractors, Manufacturer of LT Panels & Medical Isolation Panels.
					</p>
				</div>
			</section>

			<section className="capabilities-list section" ref={(el) => (sectionRefs.current[1] = el)}>
				<div className="container">
					<div className="capability-item">
						<div className="capability-content">
							<h3>Precision Engineering</h3>
							<p>
								Our precision engineering services combine advanced technology with expert craftsmanship to deliver
								components and systems that meet the most exacting specifications. From concept to completion, we work
								closely with our clients to ensure that every detail is perfect.
							</p>
							<ul className="capability-features">
								<li>Computer-Aided Design (CAD)</li>
								<li>3D Modeling and Simulation</li>
								<li>Prototype Development</li>
								<li>Reverse Engineering</li>
								<li>Tolerance Analysis</li>
							</ul>
						</div>
						<div className="capability-image">
							<div className="image-placeholder"></div>
						</div>
					</div>

					<div className="capability-item reverse">
						<div className="capability-content">
							<h3>Custom Fabrication</h3>
							<p>
								Our custom fabrication services are designed to bring your vision to life with precision and quality. We
								work with a wide range of materials and employ advanced fabrication techniques to create components and
								systems that meet your specific requirements.
							</p>
							<ul className="capability-features">
								<li>LT PANELS</li>
								<li>CNC Machining</li>
								<li>Welding and Assembly</li>
								<li>Laser Cutting</li>
								<li>Surface Finishing</li>
							</ul>
						</div>
						<div className="capability-image">
							<div className="image-placeholder"></div>
						</div>
					</div>

					<div className="capability-item">
						<div className="capability-content">
							<h3>Advanced Manufacturing</h3>
							<p>
								Our advanced manufacturing capabilities leverage the latest technologies and processes to deliver
								high-quality components and systems with efficiency and precision. We continuously invest in new
								equipment and training to stay at the forefront of manufacturing innovation.
							</p>
							<ul className="capability-features">
								<li>Additive Manufacturing (3D Printing)</li>
								<li>5-Axis CNC Machining</li>
								<li>Automated Assembly</li>
								<li>Precision Grinding</li>
								<li>Quality Control and Inspection</li>
							</ul>
						</div>
						<div className="capability-image">
							<div className="image-placeholder"></div>
						</div>
					</div>
				</div>
			</section>

			<section className="equipment section" ref={(el) => (sectionRefs.current[2] = el)}>
				<div className="container">
					<h2 className="section-title">Our Equipment</h2>
					<p className="section-description">
						We invest in the latest technology and equipment to ensure that we can deliver the highest quality products
						and services to our clients.
					</p>

					<div className="equipment-grid">
						<div className="equipment-item">
							<h3>CNC Machines</h3>
							<ul>
								<li>5-Axis CNC Machining Centers</li>
								<li>CNC Turning Centers</li>
								<li>CNC Grinding Machines</li>
							</ul>
						</div>
						<div className="equipment-item">
							<h3>Fabrication Equipment</h3>
							<ul>
								<li>Laser Cutting Systems</li>
								<li>Press Brakes</li>
								<li>Welding Equipment</li>
							</ul>
						</div>
						<div className="equipment-item">
							<h3>Inspection Tools</h3>
							<ul>
								<li>Coordinate Measuring Machines (CMM)</li>
								<li>Optical Measurement Systems</li>
								<li>Surface Roughness Testers</li>
							</ul>
						</div>
						<div className="equipment-item">
							<h3>Design Software</h3>
							<ul>
								<li>SolidWorks</li>
								<li>AutoCAD</li>
								<li>Simulation Software</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="industries section" ref={(el) => (sectionRefs.current[3] = el)}>
				<div className="container">
					<h2 className="section-title">Industries We Serve</h2>
					<div className="industries-grid">
						<div className="industry-card">
							<div className="industry-icon">
								<i className="icon-aerospace"></i>
							</div>
							<h3>Aerospace & Defense</h3>
						</div>
						<div className="industry-card">
							<div className="industry-icon">
								<i className="icon-medical"></i>
							</div>
							<h3>Medical</h3>
						</div>
						<div className="industry-card">
							<div className="industry-icon">
								<i className="icon-automotive"></i>
							</div>
							<h3>Automotive</h3>
						</div>
						<div className="industry-card">
							<div className="industry-icon">
								<i className="icon-electronics"></i>
							</div>
							<h3>Electronics</h3>
						</div>
						<div className="industry-card">
							<div className="industry-icon">
								<i className="icon-energy"></i>
							</div>
							<h3>Energy</h3>
						</div>
						<div className="industry-card">
							<div className="industry-icon">
								<i className="icon-consumer"></i>
							</div>
							<h3>Consumer Products</h3>
						</div>
					</div>
				</div>
			</section>

			<section className="cta-section section" ref={(el) => (sectionRefs.current[4] = el)}>
				<div className="container">
					<div className="cta-content">
						<h2>Ready to Start Your Project?</h2>
						<p>Contact us today to discuss how our capabilities can help bring your vision to life.</p>
						<button className="btn-primary">Contact Us</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Capabilities
