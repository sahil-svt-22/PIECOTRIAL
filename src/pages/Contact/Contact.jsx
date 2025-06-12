"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import "./Contact.css"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRefs = useRef([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

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
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear submit status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate random success/failure for demo
      if (Math.random() > 0.2) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to discuss your project needs</p>
        </div>
      </section>

      <section className="contact-intro section" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="container">
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p className="section-description">
            Whether you have a specific project in mind or just want to learn more about our capabilities, we're here to
            help. Contact us today to discuss how Trident Pro Systems can bring your vision to life.
          </p>
        </div>
      </section>

      <section className="contact-content section" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>

              {submitStatus && (
                <motion.div
                  className={`form-status ${submitStatus}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus === "success" ? (
                    <p>✓ Thank you for your message! We will get back to you soon.</p>
                  ) : (
                    <p>✗ There was an error sending your message. Please try again.</p>
                  )}
                </motion.div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn-primary submit-btn ${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="small" color="white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon-location"></i>
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    123 Industrial Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon-email"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>info@tridentprosystems.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon-clock"></i>
                </div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section section" ref={(el) => (sectionRefs.current[2] = el)}>
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <p>Interactive Map</p>
              <p>123 Industrial Drive, San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to schedule a consultation and learn how we can help with your next project.</p>
            <button className="btn-primary">Schedule Consultation</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
