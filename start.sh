#!/bin/sh

# Start the backend service
cd /app/backend
node server.js &

# Start Nginx
nginx -g 'daemon off;' 