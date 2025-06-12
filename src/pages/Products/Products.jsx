"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import "./Products.css"
import { SkeletonCard } from "../../components/SkeletonLoader/SkeletonLoader"
import LazyImage from "../../components/LazyImage/LazyImage"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

gsap.registerPlugin(ScrollTrigger)

const Products = () => {
	const sectionRefs = useRef([])
	const [productsLoading, setProductsLoading] = useState(true)
	const [categoriesLoading, setCategoriesLoading] = useState(true)

	useEffect(() => {
		// Simulate loading states
		const categoriesTimer = setTimeout(() => {
			setCategoriesLoading(false)
		}, 800)

		const productsTimer = setTimeout(() => {
			setProductsLoading(false)
		}, 1200)

		return () => {
			clearTimeout(categoriesTimer)
			clearTimeout(productsTimer)
		}
	}, [])

	useEffect(() => {
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
	}, [categoriesLoading, productsLoading])

	return (
		<div className="products-page">
			<section className="page-header">
				<div className="page-header-overlay"></div>
				<div className="page-header-content">
					<h1>Our Products</h1>
					<p>Explore our range of precision-engineered products and solutions</p>
				</div>
			</section>

			<section className="products-intro section" ref={(el) => (sectionRefs.current[0] = el)}>
				<div className="container">
					<h2 className="section-title">Product Categories</h2>
					<p className="section-description">
						At Pieco, we offer a diverse range of precision-engineered products designed to meet the
						specific needs of various industries. Our products are built to the highest standards of quality and
						performance.
					</p>
				</div>
			</section>

			<section className="product-categories section" ref={(el) => (sectionRefs.current[1] = el)}>
				<div className="container">
					<div className="category-grid">
						{categoriesLoading ? (
							Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
						) : (
							<>
								<motion.div
									className="category-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
								>
									<div className="category-image">
										<LazyImage src="/placeholder.svg" alt="Precision Components" width="100%" height="200px" />
									</div>
									<h3>Precision Components</h3>
									<p>High-quality precision components engineered to meet the most demanding specifications.</p>
									<button className="btn-secondary">Learn More</button>
								</motion.div>
								<motion.div
									className="category-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									<div className="category-image">
										<LazyImage src="/placeholder.svg" alt="Custom Assemblies" width="100%" height="200px" />
									</div>
									<h3>Custom Assemblies</h3>
									<p>Fully assembled and tested systems designed to your specific requirements.</p>
									<button className="btn-secondary">Learn More</button>
								</motion.div>
								<motion.div
									className="category-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<div className="category-image">
										<LazyImage src="/placeholder.svg" alt="Specialized Equipment" width="100%" height="200px" />
									</div>
									<h3>Specialized Equipment</h3>
									<p>Specialized equipment and tools for various industrial applications.</p>
									<button className="btn-secondary">Learn More</button>
								</motion.div>
							</>
						)}
					</div>
				</div>
			</section>

			<section className="featured-products section" ref={(el) => (sectionRefs.current[2] = el)}>
				<div className="container">
					<h2 className="section-title">Featured Products</h2>
					{productsLoading ? (
						<div className="loading-container">
							<LoadingSpinner size="large" />
							<p>Loading featured products...</p>
						</div>
					) : (
						<div className="products-grid">
							{Array.from({ length: 4 }).map((_, index) => (
								<motion.div
									key={index}
									className="product-card"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<div className="product-image">
										<LazyImage src="/placeholder.svg" alt={`Product ${index + 1}`} width="100%" height="200px" />
									</div>
									<div className="product-details">
										<h3>Product {index + 1}</h3>
										<p className="product-category">Category</p>
										<p className="product-description">High-performance product designed for critical applications.</p>
										<button className="btn-secondary">View Details</button>
									</div>
								</motion.div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Rest of the component remains the same */}
			<section className="custom-solutions section" ref={(el) => (sectionRefs.current[3] = el)}>
				<div className="container">
					<div className="custom-solutions-content">
						<div className="custom-solutions-text">
							<h2 className="section-title">Custom Solutions</h2>
							<p>
								In addition to our standard product offerings, we specialize in developing custom solutions tailored to
								the unique needs of our clients. Our team of engineers works closely with you to understand your
								requirements and design a solution that meets your specific needs.
							</p>
							<p>
								From concept to completion, we provide comprehensive support throughout the development process,
								ensuring that the final product exceeds your expectations.
							</p>
							<button className="btn-primary">Request a Custom Solution</button>
						</div>
						<div className="custom-solutions-image">
							<LazyImage src="/placeholder.svg" alt="Custom Solutions" width="100%" height="300px" />
						</div>
					</div>
				</div>
			</section>

			<section className="quality-assurance section" ref={(el) => (sectionRefs.current[4] = el)}>
				<div className="container">
					<h2 className="section-title">Quality Assurance</h2>
					<p className="section-description">
						At Pieco India Engineering..., quality is at the core of everything we do. Our comprehensive quality assurance
						process ensures that every product we deliver meets the highest standards of performance and reliability.
					</p>
					<div className="quality-steps">
						<div className="quality-step">
							<div className="step-number">01</div>
							<h3>Design Review</h3>
							<p>Thorough review of design specifications to ensure manufacturability and performance.</p>
						</div>
						<div className="quality-step">
							<div className="step-number">02</div>
							<h3>Material Selection</h3>
							<p>Careful selection of materials to meet performance requirements and quality standards.</p>
						</div>
						<div className="quality-step">
							<div className="step-number">03</div>
							<h3>Precision Manufacturing</h3>
							<p>State-of-the-art manufacturing processes to ensure precision and consistency.</p>
						</div>
						<div className="quality-step">
							<div className="step-number">04</div>
							<h3>Rigorous Testing</h3>
							<p>Comprehensive testing to verify performance and reliability under various conditions.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="cta-section section" ref={(el) => (sectionRefs.current[5] = el)}>
				<div className="container">
					<div className="cta-content">
						<h2>Ready to Learn More?</h2>
						<p>Contact us today to discuss your product needs or request a quote.</p>
						<button className="btn-primary">Contact Us</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Products
