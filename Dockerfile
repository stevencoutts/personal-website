# Use the official Nginx image as the base
FROM fholzer/nginx-brotli:latest

# Copy the website files to Nginx's default serving directory
COPY frontend/index.html /usr/share/nginx/html/index.html
COPY frontend/css /usr/share/nginx/html/css
COPY frontend/images /usr/share/nginx/html/images
COPY frontend/sw.js /usr/share/nginx/html/sw.js
COPY frontend/robots.txt /usr/share/nginx/html/robots.txt
COPY frontend/sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY frontend/pgp-public-stevec-couttsnet-com.asc /usr/share/nginx/html/pgp-public-stevec-couttsnet-com.asc
# Copy the server configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80 