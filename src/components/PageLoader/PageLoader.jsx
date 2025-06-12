"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./PageLoader.css"

const PageLoader = ({ isLoading, children }) => {
	const [showLoader, setShowLoader] = useState(isLoading)

	useEffect(() => {
		if (!isLoading) {
			const timer = setTimeout(() => {
				setShowLoader(false)
			}, 500)
			return () => clearTimeout(timer)
		} else {
			setShowLoader(true)
		}
	}, [isLoading])

	return (
		<>
			<AnimatePresence>
				{showLoader && (
					<motion.div
						className="page-loader"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="loader-content">
							<div className="loader-logo">
								<motion.div
									className="logo-text"
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								>

								</motion.div>
							</div>
							<motion.div
								className="loader-progress"
								initial={{ width: 0 }}
								animate={{ width: "100%" }}
								transition={{ duration: 2, ease: "easeInOut" }}
							>
								<div className="progress-bar"></div>
							</motion.div>
							<motion.p
								className="loader-text"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.8 }}
							>
								Loading...
							</motion.p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{!showLoader && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default PageLoader
