"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Careers.css"

gsap.registerPlugin(ScrollTrigger)

const Careers = () => {
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
		<div className="careers-page">
			<section className="page-header">
				<div className="page-header-overlay"></div>
				<div className="page-header-content">
					<h1>Careers</h1>
					<p>Join our team and help shape the future of precision engineering</p>
				</div>
			</section>

			<section className="careers-intro section" ref={(el) => (sectionRefs.current[0] = el)}>
				<div className="container">
					<h2 className="section-title">Why Work With Us?</h2>
					<p className="section-description">
						At Pieco, we believe that our people are our greatest asset. We offer a dynamic work
						environment where innovation thrives, and every team member has the opportunity to make a meaningful impact.
					</p>
				</div>
			</section>

			<section className="benefits section" ref={(el) => (sectionRefs.current[1] = el)}>
				<div className="container">
					<div className="benefits-grid">
						<div className="benefit-card">
							<div className="benefit-icon">
								<i className="icon-growth"></i>
							</div>
							<h3>Career Growth</h3>
							<p>
								We provide opportunities for professional development and career advancement through training programs
								and mentorship.
							</p>
						</div>
						<div className="benefit-card">
							<div className="benefit-icon">
								<i className="icon-balance"></i>
							</div>
							<h3>Work-Life Balance</h3>
							<p>
								We understand the importance of work-life balance and offer flexible working arrangements to support our
								team members.
							</p>
						</div>
						<div className="benefit-card">
							<div className="benefit-icon">
								<i className="icon-benefits"></i>
							</div>
							<h3>Comprehensive Benefits</h3>
							<p>
								We offer competitive compensation packages including health insurance, retirement plans, and paid time
								off.
							</p>
						</div>
						<div className="benefit-card">
							<div className="benefit-icon">
								<i className="icon-innovation"></i>
							</div>
							<h3>Innovation Culture</h3>
							<p>We foster a culture of innovation where new ideas are encouraged and creativity is valued.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="open-positions section" ref={(el) => (sectionRefs.current[2] = el)}>
				<div className="container">
					<h2 className="section-title">Open Positions</h2>
					<div className="positions-list">
						<div className="position-card">
							<div className="position-header">
								<h3>Senior Mechanical Engineer</h3>
								<span className="position-type">Full-time</span>
							</div>
							<p className="position-location">Location: Kirti Nagar, Delhi</p>
							<p className="position-description">
								We are seeking an experienced mechanical engineer to join our design team and lead the development of
								precision components for aerospace applications.
							</p>
							<div className="position-requirements">
								<h4>Requirements:</h4>
								<ul>
									<li>Bachelor's degree in Mechanical Engineering</li>
									<li>5+ years of experience in precision engineering</li>
									<li>Proficiency in SolidWorks and AutoCAD</li>
									<li>Experience with industry standards</li>
								</ul>
							</div>
							<button className="btn-primary">Apply Now</button>
						</div>

						<div className="position-card">
							<div className="position-header">
								<h3>CNC Machinist</h3>
								<span className="position-type">Full-time</span>
							</div>
							<p className="position-location">Location: Kirti Nagar, Delhi</p>
							<p className="position-description">
								Join our manufacturing team as a skilled CNC machinist responsible for producing high-precision
								components using state-of-the-art equipment.
							</p>
							<div className="position-requirements">
								<h4>Requirements:</h4>
								<ul>
									<li>3+ years of CNC machining experience</li>
									<li>Proficiency with 5-axis CNC machines</li>
									<li>Ability to read technical drawings</li>
									<li>Experience with precision measurement tools</li>
								</ul>
							</div>
							<button className="btn-primary">Apply Now</button>
						</div>

						<div className="position-card">
							<div className="position-header">
								<h3>Quality Control Inspector</h3>
								<span className="position-type">Full-time</span>
							</div>
							<p className="position-location">Location: Kirti Nagar, Delhi</p>
							<p className="position-description">
								We are looking for a detail-oriented quality control inspector to ensure that all products meet our high
								standards of quality and precision.
							</p>
							<div className="position-requirements">
								<h4>Requirements:</h4>
								<ul>
									<li>Associate degree in related field or equivalent experience</li>
									<li>Experience with CMM and optical measurement systems</li>
									<li>Knowledge of GD&T principles</li>
									<li>Strong attention to detail</li>
								</ul>
							</div>
							<button className="btn-primary">Apply Now</button>
						</div>

						<div className="position-card">
							<div className="position-header">
								<h3>Project Manager</h3>
								<span className="position-type">Full-time</span>
							</div>
							<p className="position-location">Location: Khanapara , Meghalaya</p>
							<p className="position-description">
								Lead cross-functional teams to deliver complex engineering projects on time and within budget while
								maintaining the highest quality standards.
							</p>
							<div className="position-requirements">
								<h4>Requirements:</h4>
								<ul>
									<li>Bachelor's degree in Engineering or related field</li>
									<li>PMP certification preferred</li>
									<li>5+ years of project management experience</li>
									<li>Strong leadership and communication skills</li>
								</ul>
							</div>
							<button className="btn-primary">Apply Now</button>
						</div>
					</div>
				</div>
			</section>

			<section className="application-process section" ref={(el) => (sectionRefs.current[3] = el)}>
				<div className="container">
					<h2 className="section-title">Application Process</h2>
					<div className="process-steps">
						<div className="process-step">
							<div className="step-number">01</div>
							<h3>Submit Application</h3>
							<p>Submit your resume and cover letter through our online application system.</p>
						</div>
						<div className="process-step">
							<div className="step-number">02</div>
							<h3>Initial Review</h3>
							<p>Our HR team will review your application and contact qualified candidates.</p>
						</div>
						<div className="process-step">
							<div className="step-number">03</div>
							<h3>Interview Process</h3>
							<p>Participate in interviews with our hiring managers and team members.</p>
						</div>
						<div className="process-step">
							<div className="step-number">04</div>
							<h3>Final Decision</h3>
							<p>We'll make our final decision and extend an offer to the selected candidate.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="cta-section section" ref={(el) => (sectionRefs.current[4] = el)}>
				<div className="container">
					<div className="cta-content">
						<h2>Don't See the Right Position?</h2>
						<p>
							We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
							mind for future opportunities.
						</p>
						<button className="btn-primary">Send Resume</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Careers
