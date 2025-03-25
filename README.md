# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features a clean design with dark/light theme support and dynamic content loading.

## Features

- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📝 Dynamic blog post loading
- 🔒 PGP key integration
- 🎯 CCIE certification showcase
- 🛡️ Airdata UAV Safety certification
- 🔗 Social media integration
- 📱 Bluesky social feed integration
- 🔍 SEO optimized with sitemap and robots.txt

## Tech Stack

- HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- JavaScript (Vanilla)
- Docker for containerization
- Nginx for web server
- Python (FastAPI) for backend API

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/stevencoutts/personal-website.git
   cd personal-website
   ```

2. Build and start the containers:
   ```bash
   ./build.sh
   ```

3. Visit `http://localhost:8083` in your browser

## Development

### Project Structure

```
personal-website/
├── frontend/           # Frontend static files
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── images/        # Image assets
├── backend/           # Backend API service
├── nginx/             # Nginx configuration
├── docker-compose.yml # Docker compose configuration
└── build.sh          # Build script
```

### Building

To rebuild the containers after making changes:

```bash
./build.sh
```

### Local Development

1. Make changes to the frontend files in the `frontend` directory
2. Make changes to the backend files in the `backend` directory
3. Rebuild using `./build.sh`

## Features in Detail

### Theme Support
- Automatic system theme detection
- Manual theme toggle
- Smooth transitions between themes
- Persistent theme preference

### Blog Integration
- Dynamic loading of recent blog posts
- Fallback content when API is unavailable
- Responsive post cards with hover effects

### Security
- PGP key integration for secure communication
- HTTPS support
- Secure headers configuration

### Performance
- Optimized image loading
- CSS animations for smooth transitions
- Efficient resource loading

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under The Unlicense - see the [LICENSE](LICENSE) file for details.

The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It is a more permissive license than the MIT license, as it disclaims all copyright and related rights.

## Contact

Steve Coutts - [@stevecoutts](https://bsky.app/profile/stevecoutts.bsky.social)

Project Link: [https://github.com/stevencoutts/personal-website](https://github.com/stevencoutts/personal-website) 