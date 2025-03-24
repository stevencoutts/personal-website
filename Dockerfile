# Use the official Nginx image as the base
FROM nginx:alpine

# Install Node.js and npm
RUN apk add --update nodejs npm

# Copy the website files to Nginx's default serving directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/
COPY sw.js /usr/share/nginx/html/

# Copy a custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy backend files
COPY backend /app/backend
WORKDIR /app/backend

# Install backend dependencies
RUN npm install

# Expose ports
EXPOSE 80 3000

# Start both Nginx and the backend service
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"] 