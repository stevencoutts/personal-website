# Personal Website

A static personal website served using Nginx in a Docker container.

## Features

- Lightweight Nginx Alpine-based container
- Optimized static file serving
- Gzip compression for better performance
- Proper caching headers for static assets
- Security headers implementation
- Responsive design
- Automated build script
- Development mode with auto-rebuild

## Prerequisites

- Docker installed on your system
- Git (optional, for cloning the repository)
- Homebrew (for macOS users, required for development mode)

## Getting Started

### Using the Build Script (Recommended)

The easiest way to build and run the website is using the provided build script:

```bash
./build.sh
```

This script will:
1. Stop any existing containers
2. Remove old images
3. Build a new Docker image
4. Start the container
5. Provide status messages throughout the process

The website will be available at `http://localhost:8080`

### Development Mode with Auto-Rebuild

For development, you can use the watch script that automatically rebuilds the container when files change:

```bash
./watch.sh
```

This script will:
1. Check for and install required dependencies (fswatch)
2. Perform an initial build
3. Monitor the following files for changes:
   - website.html
   - styles.css
   - sw.js
   - images/
4. Automatically rebuild and restart the container when changes are detected

Press Ctrl+C to stop the watch script.

### Manual Build (Alternative)

If you prefer to build manually, you can use these commands:

```bash
# Build the Docker image
docker build -t personal-website .

# Run the container
docker run -d -p 8080:80 personal-website
```

### Stopping the Container

```bash
docker stop $(docker ps -q --filter ancestor=personal-website)
```

## Project Structure

```
.
├── website.html          # Main website file
├── styles.css           # Website styles
├── sw.js               # Service worker for offline support
├── images/             # Static images directory
├── nginx.conf          # Nginx configuration
├── Dockerfile          # Docker configuration
├── build.sh           # Build automation script
├── watch.sh           # Development mode script
└── .dockerignore      # Docker ignore file
```

## Technical Details

### Nginx Configuration

The `nginx.conf` file includes:
- Gzip compression for text-based files
- Cache headers for static assets (30-day expiration)
- Security headers for enhanced protection
- Content Security Policy for secure resource loading

### Docker Configuration

- Uses the official Nginx Alpine image for minimal size
- Exposes port 80 for HTTP traffic
- Copies website files to Nginx's default serving directory
- Implements custom Nginx configuration

## Development

To make changes to the website:
1. Modify the HTML/CSS files as needed
2. Run `./watch.sh` for automatic rebuilds during development
3. Or use `./build.sh` for manual rebuilds
4. Or manually rebuild using the Docker commands

## License

All rights reserved. 