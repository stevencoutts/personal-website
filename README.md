# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features include a dynamic blog post feed, Bluesky integration, and a beautiful dark/light theme.

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light theme toggle with system preference detection
- 📱 Mobile-friendly layout
- 🔄 Dynamic blog post feed from RSS
- 🐦 Bluesky integration
- ⚡ Service Worker for offline capabilities
- 🔒 Security headers and best practices
- 🚀 Docker deployment ready
- 🔍 SEO optimized
- ♿ Accessibility focused

## Tech Stack

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla)
- Node.js (for backend RSS feed)
- Nginx (web server)
- Docker (containerization)

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/stevencoutts/personal-website.git
   cd personal-website
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```

4. Open `index.html` in your browser or use a local server.

## Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t personal-website .
   ```

2. Run the container:
   ```bash
   docker run -d -p 80:80 -p 8083:8083 personal-website
   ```

The website will be available at `http://localhost` and the backend API at `http://localhost:8083`.

## Project Structure

```
personal-website/
├── backend/
│   ├── server.js
│   └── package.json
├── images/
│   ├── CCIE_Enterprise_med.gif
│   ├── bluesky-icon.webp
│   ├── favicon.png
│   ├── github-icon.png
│   ├── linkedin-icon.jpg
│   └── pgp-desktop-logo.avif
├── index.html
├── styles.css
├── sw.js
├── Dockerfile
├── nginx.conf
├── start.sh
└── README.md
```

## Features in Detail

### Theme System
- Automatic dark/light mode detection
- Manual theme toggle
- Persistent theme preference
- Smooth transitions

### Blog Integration
- Fetches latest posts from RSS feed
- Displays post titles and dates
- Error handling and loading states

### Bluesky Integration
- Embedded Bluesky feed
- Responsive layout
- Link handling

### Performance
- Service Worker for offline access
- Resource preloading
- Optimized asset loading
- Gzip compression

### Security
- Content Security Policy
- XSS Protection
- Frame Options
- Referrer Policy
- CORS configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under The Unlicense - see the [LICENSE](LICENSE) file for details.

The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It is a more permissive license than the MIT license, as it disclaims all copyright and related rights.

## Acknowledgments

- Thanks to all contributors and supporters
- Inspired by modern web design principles
- Built with modern web technologies

## Contact

Steven Coutts - [@steven.couttsnet.com](https://bsky.app/profile/steven.couttsnet.com)

Project Link: [https://github.com/stevencoutts/personal-website](https://github.com/stevencoutts/personal-website) 