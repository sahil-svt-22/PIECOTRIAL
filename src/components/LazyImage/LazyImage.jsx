"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader"
import "./LazyImage.css"
import heroImage from "../../../Assets/heroImage.jpeg"

const LazyImage = ({
	src = { heroImage },
	alt,
	className = "",
	width = "100%",
	height = "auto",
	objectFit = "cover",
}) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isInView, setIsInView] = useState(false)
	const [hasError, setHasError] = useState(false)
	const imgRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 },
		)

		if (imgRef.current) {
			observer.observe(imgRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const handleLoad = () => {
		setIsLoaded(true)
	}

	const handleError = () => {
		setHasError(true)
		setIsLoaded(true)
	}

	return (
		<div ref={imgRef} className={`lazy-image-container ${className}`} style={{ width, height }}>
			{!isLoaded && <SkeletonLoader width="100%" height="100%" className="lazy-image-skeleton" />}

			{isInView && (
				<motion.img
					src={hasError ? src : src}
					alt={alt}
					className={`lazy-image ${isLoaded ? "loaded" : ""}`}
					style={{ objectFit }}
					onLoad={handleLoad}
					onError={handleError}
					initial={{ opacity: 0 }}
					animate={{ opacity: isLoaded ? 1 : 0 }}
					transition={{ duration: 0.3 }}
				/>
			)}
		</div>
	)
}

export default LazyImage
