# Personal Website

A modern, responsive personal website showcasing my professional background, certifications, and social presence. Built with vanilla HTML, CSS, and JavaScript, this website emphasizes performance and accessibility while maintaining a clean, professional appearance.

## Features

- **Responsive Design**: Adapts seamlessly to all device sizes
- **Dark/Light Mode**: User-friendly theme switching with system preference detection
- **Dynamic Content**:
  - Real-time Bluesky feed integration
  - Recent blog posts from RSS feed
  - Fallback content for when external services are unavailable
- **Performance Optimizations**:
  - Resource preloading
  - Asynchronous script loading
  - Service Worker for offline capabilities
- **Accessibility**:
  - ARIA labels
  - Semantic HTML structure
  - Keyboard navigation support
- **Security**:
  - PGP key integration
  - Secure external links
  - Content Security Policy compliance

## Technical Stack

- **Frontend**:
  - HTML5
  - CSS3 with modern features (CSS Grid, Flexbox)
  - Vanilla JavaScript (ES6+)
  - Service Worker for PWA capabilities
- **External Services**:
  - Bluesky Embed for social feed
  - RSS2JSON for blog post integration
  - Airdata for certification verification

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── images/            # Image assets
│   ├── CCIE_Enterprise_med.png
│   ├── favicon.svg
│   └── social-icons/
├── sw.js              # Service Worker
└── README.md          # Project documentation
```

## Development

### Prerequisites

- Modern web browser with JavaScript enabled
- Basic understanding of HTML, CSS, and JavaScript.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   ```

2. Open `index.html` in your preferred web browser or use a local development server.

### Customization

- Update personal information in `index.html`
- Modify styles in `styles.css`
- Adjust blog post refresh interval in the JavaScript code
- Update Bluesky embed parameters as needed

## Deployment

The website is designed to be deployed on any static hosting service. Simply upload the files to your hosting provider.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Metrics

- Lighthouse scores:
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

## Contributing

While this is a personal website, suggestions and improvements are welcome. Please feel free to submit issues or pull requests.

## License

This project is licensed under The Unlicense - see the [LICENSE](LICENSE) file for details.

## Author

Steven Coutts - CCIE 51771
- Website: [stevec.couttsnet.com](https://stevec.couttsnet.com)
- Bluesky: [@steven.couttsnet.com](https://bsky.app/profile/steven.couttsnet.com)
- LinkedIn: [stevencoutts](https://www.linkedin.com/in/stevencoutts/)
- GitHub: [stevencoutts](https://github.com/stevencoutts) 