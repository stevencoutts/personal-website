# Personal Website

A static personal website served using Nginx in a Docker container.

## Features

- Lightweight Nginx Alpine-based container
- Optimized static file serving
- Gzip compression for better performance
- Proper caching headers for static assets
- Security headers implementation
- Responsive design

## Prerequisites

- Docker installed on your system
- Git (optional, for cloning the repository)

## Getting Started

### Building the Docker Image

```bash
docker build -t personal-website .
```

### Running the Container

```bash
docker run -d -p 8080:80 personal-website
```

The website will be available at `http://localhost:8080`

### Stopping the Container

```bash
docker stop $(docker ps -q --filter ancestor=personal-website)
```

## Project Structure

```
.
├── website.html          # Main website file
├── images/              # Static images directory
├── nginx.conf          # Nginx configuration
├── Dockerfile          # Docker configuration
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
2. Rebuild the Docker image
3. Restart the container

## License

All rights reserved. 