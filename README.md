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
   git clone https://github.com/stevencoutts/personal-website.git
   ```

2. Open `