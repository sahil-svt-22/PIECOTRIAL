import "./SkeletonLoader.css"

const SkeletonLoader = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  className = "",
  variant = "rectangular",
}) => {
  const skeletonClass = `skeleton-loader ${variant} ${className}`

  const style = {
    width,
    height,
    borderRadius: variant === "circular" ? "50%" : borderRadius,
  }

  return <div className={skeletonClass} style={style}></div>
}

// Predefined skeleton components
export const SkeletonText = ({ lines = 3, className = "" }) => (
  <div className={`skeleton-text ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonLoader
        key={index}
        height="16px"
        width={index === lines - 1 ? "60%" : "100%"}
        className="skeleton-text-line"
      />
    ))}
  </div>
)

export const SkeletonCard = ({ className = "" }) => (
  <div className={`skeleton-card ${className}`}>
    <SkeletonLoader height="200px" className="skeleton-card-image" />
    <div className="skeleton-card-content">
      <SkeletonLoader height="24px" width="80%" className="skeleton-card-title" />
      <SkeletonText lines={2} className="skeleton-card-text" />
      <SkeletonLoader height="40px" width="120px" className="skeleton-card-button" />
    </div>
  </div>
)

export const SkeletonNavbar = () => (
  <div className="skeleton-navbar">
    <SkeletonLoader height="40px" width="150px" />
    <div className="skeleton-nav-links">
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonLoader key={index} height="20px" width="80px" />
      ))}
    </div>
  </div>
)

export default SkeletonLoader
