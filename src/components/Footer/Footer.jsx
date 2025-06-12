import { Link } from "react-router-dom"
import "./Footer.css"
import logo1 from "../../../Assets/logo1.png"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-top">
					<div className="footer-logo">
						<div alt="Pieco Systems" className="logo" />

					</div>
					<div className="footer-links">
						<div className="footer-links-column">
							<h4>Company</h4>
							<ul>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/capabilities">Capabilities</Link>
								</li>
								<li>
									<Link to="/products">Products</Link>
								</li>
								<li>
									<Link to="/careers">Careers</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
						<div className="footer-links-column">
							<h4>Connect</h4>
							<ul>
								<li>
									<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
										LinkedIn
									</a>
								</li>
								<li>
									<a href="mailto:info@tridentprosystems.com">Email Us</a>
								</li>
								<li>
									<a href="tel:+1234567890">Call Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<p>&copy; {new Date().getFullYear()} WebsInnovator. All rights reserved.</p>
					<div className="footer-legal">
						<Link to="/privacy">Privacy Policy</Link>
						<Link to="/terms">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
