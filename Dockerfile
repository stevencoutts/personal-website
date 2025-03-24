# Use the official Nginx image as the base
FROM nginx:alpine

# Copy the website files to Nginx's default serving directory
COPY . /usr/share/nginx/html/

# Copy a custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 