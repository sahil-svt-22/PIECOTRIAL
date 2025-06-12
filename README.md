# Trident Pro Systems Website Clone

A React-based clone of the Trident Pro Systems website featuring precision engineering and fabrication services.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: GSAP and Framer Motion animations for enhanced user experience
- **Multi-page Navigation**: Complete website with Home, About, Capabilities, Products, Careers, and Contact pages
- **Modern React**: Built with React 18 and React Router for navigation
- **Clean Code Structure**: Organized component structure with separate CSS files

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing for multi-page navigation
- **GSAP**: Professional-grade animation library for scroll-triggered animations
- **Framer Motion**: React animation library for smooth transitions
- **CSS3**: Modern CSS with Flexbox and Grid layouts
- **Google Fonts**: Roboto font family for clean typography

## Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone or download the project files**
   \`\`\`bash
   # If using git
   git clone <repository-url>
   cd trident-pro-systems-clone
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm start
   \`\`\`

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The website should load automatically

### Build for Production

To create a production build:

\`\`\`bash
npm run build
\`\`\`

This creates a `build` folder with optimized files ready for deployment.

## Project Structure

\`\`\`
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Capabilities/
│   │   ├── Capabilities.jsx
│   │   └── Capabilities.css
│   ├── Products/
│   │   ├── Products.jsx
│   │   └── Products.css
│   ├── Careers/
│   │   ├── Careers.jsx
│   │   └── Careers.css
│   └── Contact/
│       ├── Contact.jsx
│       └── Contact.css
├── assets/
│   └── (images and other assets)
├── App.jsx
├── App.css
├── index.js
└── index.css
\`\`\`

## Dependencies

### Production Dependencies

- `react`: ^18.2.0 - Core React library
- `react-dom`: ^18.2.0 - React DOM rendering
- `react-router-dom`: ^6.8.0 - Client-side routing
- `framer-motion`: ^10.16.0 - Animation library
- `gsap`: ^3.12.2 - Professional animation library
- `web-vitals`: ^3.3.2 - Performance monitoring

### Development Dependencies

- `react-scripts`: 5.0.1 - Build tools and development server

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (irreversible)

## Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy your site

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## Customization

### Adding Images

1. Place images in the `src/assets/` folder
2. Import them in your components:
   \`\`\`jsx
   import heroImage from '../assets/hero-image.jpg';
   \`\`\`
3. Use them in your JSX:
   \`\`\`jsx
   <img src={heroImage || "/placeholder.svg"} alt="Description" />
   \`\`\`

### Modifying Animations

- **GSAP animations**: Edit the `useEffect` hooks in page components
- **Framer Motion**: Modify the `motion` components and their props
- **CSS transitions**: Update the CSS files for hover effects and transitions

### Styling Changes

- Each component has its own CSS file for easy customization
- Global styles are in `src/index.css`
- Color scheme and typography can be modified in the CSS variables

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:
- Code splitting with React Router
- Optimized images and assets
- Efficient CSS with minimal unused styles
- GSAP animations optimized for 60fps

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational and demonstration purposes. Please respect the original Trident Pro Systems branding and content.

## Support

If you encounter any issues:

1. Check that all dependencies are installed correctly
2. Ensure you're using Node.js version 14 or higher
3. Clear your browser cache and restart the development server
4. Check the browser console for any error messages

For additional help, please refer to the React documentation or create an issue in the project repository.
