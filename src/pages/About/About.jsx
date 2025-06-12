"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./About.css"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
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
		<div className="about-page">
			<section className="page-header">
				<div className="page-header-overlay"></div>
				<div className="page-header-content">
					<h1>About Us</h1>
					<p>Learn more about Pieco India Engineering Co. Pvt Ltd and our commitment to excellence</p>
				</div>
			</section>

			<section className="about-intro section" ref={(el) => (sectionRefs.current[0] = el)}>
				<div className="container">
					<div className="about-intro-content">
						<div className="about-intro-text">
							<h2 className="section-title">Our Story</h2>
							<p>
								Founded in 1983, Pieco Group is being acknowledged as one of the most respected name in the field of Electrical Equipment and Engineering Services. We are one of the leading trunkey Electrical & ELV Contractors, Manufacturer of LT Panels & Medical Isolation Panels.
							</p>
							<p>
								WINNING THROUGH QUALITY
								Everyone knows the better product or service will win in market place. The search to make product and service better leads to quality. And that’s why we have this mission of WINNING THROUGH QUALITY. We strive for the very best in the brains and the works, through our dedicated team of young and energetic professionals and managers with a strong industry experience in the backup.
							</p>
						</div>
						<div className="about-intro-image">
							<div className="image-placeholder"></div>
						</div>
					</div>
				</div>
			</section>

			<section className="mission-vision section" ref={(el) => (sectionRefs.current[1] = el)}>
				<div className="container">
					<div className="mission-vision-grid">
						<div className="mission-card">
							<h3>Our Mission</h3>
							<p>
								To deliver precision engineering solutions that exceed client expectations, drive
								innovation, and set new standards of excellence in the industry.
							</p>
						</div>
						<div className="vision-card">
							<h3>Our Vision</h3>
							<p>
								To be the global leader in precision engineering, recognized for our technical
								expertise, innovative solutions, and unwavering commitment to quality.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="values section" ref={(el) => (sectionRefs.current[2] = el)}>
				<div className="container">
					<h2 className="section-title">Our Core Values</h2>
					<div className="values-grid">
						<div className="value-card">
							<h3>Excellence</h3>
							<p>
								We strive for excellence in everything we do, from the quality of our work to the service we provide to
								our clients.
							</p>
						</div>
						<div className="value-card">
							<h3>Innovation</h3>
							<p>
								We embrace innovation and continuously seek new ways to improve our processes, products, and services.
							</p>
						</div>
						<div className="value-card">
							<h3>Integrity</h3>
							<p>We conduct our business with the highest level of integrity, honesty, and transparency.</p>
						</div>
						<div className="value-card">
							<h3>Collaboration</h3>
							<p>
								We believe in the power of collaboration and work closely with our clients and partners to achieve
								shared goals.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="team section" ref={(el) => (sectionRefs.current[3] = el)}>
				<div className="container">
					<h2 className="section-title">Our Leadership Team</h2>
					<div className="team-grid">
						<div className="team-member">
							<div className="team-member-image">
								<div className="image-placeholder"></div>
							</div>
							<h3>Mr Munish Verma</h3>
							<p className="team-member-title">Director</p>
							<p className="team-member-bio">
								With over 25 years of experience in engineering and business leadership, Mr Munish guided Pieco India Engineering Co. Pvt Ltd
								from its inception to its current position as an industry leader.
							</p>
						</div>
						<div className="team-member">
							<div className="team-member-image">
								<div className="image-placeholder"></div>
							</div>
							<h3>Mrs Sunita Verma</h3>
							<p className="team-member-title">Director</p>
							<p className="team-member-bio">
								Mrs Sunita Verma brings 20 years of experience in advanced engineering and has been instrumental in developing
								Pieco's innovative technical capabilities.
							</p>
						</div>
						<div className="team-member">
							<div className="team-member-image">
								<div className="image-placeholder"></div>
							</div>
							<h3>Mr Kailash</h3>
							<p className="team-member-title">VP of Operations</p>
							<p className="team-member-bio">
								Mr Kailash oversees all operational aspects of Pieco, ensuring that we deliver the highest quality
								products and services to our clients.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
