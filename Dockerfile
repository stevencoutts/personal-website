# Use the official Nginx image as the base
FROM nginx:alpine

# Copy the website files to Nginx's default serving directory
COPY index.html styles.css sw.js robots.txt sitemap.xml /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

# Copy the server configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 