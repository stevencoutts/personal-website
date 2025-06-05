# Personal Website

A modern, responsive personal website for Steven Coutts (CCIE 51771), showcasing professional background, certifications, blog posts, and social presence. Built with HTML, CSS, and JavaScript, and served via Nginx with a Node.js backend for dynamic blog post fetching and API proxying. Easily deployable with Docker.

---

## Features

- **Responsive Design**: Adapts to all device sizes.
- **Dark/Light Mode**: Theme switching with system preference detection.
- **Dynamic Content**:
  - Real-time Bluesky feed integration.
  - Recent blog posts fetched from RSS.
  - Dynamic GitHub Projects section with pinned repositories and overviews.
  - Fallback content for external service failures.
- **Performance**:
  - Resource preloading.
  - Asynchronous script loading.
  - Service Worker for offline support.
- **Accessibility**:
  - ARIA labels, semantic HTML, keyboard navigation.
- **Security**:
  - PGP key integration.
  - Secure external links.
  - Content Security Policy.

---

## Project Structure

```
.
├── index.html                # Main HTML file (frontend)
├── styles.css                # Main stylesheet
├── sw.js                     # Service Worker
├── images/                   # Image assets
├── Dockerfile                # Dockerfile for frontend (Nginx)
├── default.conf              # Nginx configuration
├── docker-compose.yml        # Multi-service orchestration
├── backend/                  # Backend API (Node.js)
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/                 # (Optional) Alternative frontend structure
│   ├── index.html
│   ├── css/
│   ├── images/
│   └── ...
├── build.sh                  # Helper script for Docker build/start
└── ...
```

---

## Services Overview

### Frontend (Nginx)

- Serves static files (`index.html`, `styles.css`, images, etc.).
- Proxies API requests (`/api/posts`) to the backend.
- Configured via `default.conf`.

### Backend (Node.js/Express)

- Fetches and caches recent blog posts from an external RSS feed.
- Serves `/api/posts` endpoint for the frontend.
- Caches results for performance and fallback.

---

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed.

---

## Quick Start (with Docker)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/stevencoutts/personal-website.git
   cd personal-website
   ```

2. **Build and start all services:**
   ```bash
   ./build.sh
   ```
   Or manually:
   ```bash
   docker-compose up --build -d
   ```

3. **Access the website:**
   - Frontend: [http://localhost:8083](http://localhost:8083)
   - Backend API: [http://localhost:8084/api/posts](http://localhost:8084/api/posts)

4. **Stop all services:**
   ```bash
   docker-compose down
   ```

---

## Manual Docker Commands

### Build and run only the frontend (Nginx):

```bash
docker build -t personal-website-frontend .
docker run -d -p 8083:80 personal-website-frontend
```

### Build and run only the backend:

```bash
cd backend
docker build -t personal-website-backend .
docker run -d -p 8084:8083 personal-website-backend
```

---

## Local Development (without Docker)

1. **Frontend:**  
   Open `index.html` directly in your browser, or serve with a static server (e.g. `python3 -m http.server`).

2. **Backend:**  
   ```bash
   cd backend
   npm install
   node server.js
   ```
   The backend will be available at [http://localhost:8083/api/posts](http://localhost:8083/api/posts).

---

## Customization

- Update personal info in `index.html` or `frontend/index.html`.
- Modify styles in `styles.css` or `frontend/css/styles.css`.
- Adjust blog post refresh interval in the JavaScript code.
- Update Bluesky embed parameters as needed.

---

## Deployment

- Deploy the built Docker images to any container hosting platform.
- Or upload the static files to any static web host (for frontend-only deployments).

---

## Caching Policy

- **Static assets** (images, CSS, JS, fonts): Cached by browsers for **1 day** (was previously 1 year).
- **HTML files:** Cached for 1 hour.
- **API responses:** Not cached (no-store, no-cache, must-revalidate).

This ensures users always get fresh content and updates are reflected quickly.

---

## License

This project is licensed under [The Unlicense](https://unlicense.org).

---

## Author

**Steven Coutts - CCIE 51771**  
- Website: [stevec.couttsnet.com](https://stevec.couttsnet.com)  
- Bluesky: [@steven.couttsnet.com](https://bsky.app/profile/steven.couttsnet.com)  
- LinkedIn: [stevencoutts](https://www.linkedin.com/in/stevencoutts/)  
- GitHub: [stevencoutts](https://github.com/stevencoutts)  

## GitHub Token Setup

To enable the backend to fetch your pinned GitHub repositories, you need to create a GitHub personal access token and add it to a `backend/.env` file:

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens).
2. Click "Generate new token" (classic).
3. Give it a name, set an expiration, and select the `public_repo` scope.
4. Copy the generated token.
5. In your `backend/` directory, create a file named `.env` with the following content:
   ```env
   GITHUB_TOKEN=your_github_token_here
   ```
6. The Docker Compose setup will automatically use this file to provide the token to the backend container.

**Note:** Never commit your token or `backend/.env` to version control.