#!/bin/bash

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Docker build process...${NC}"

# Stop any existing containers
echo -e "${YELLOW}Stopping any existing containers...${NC}"
docker stop $(docker ps -q --filter ancestor=personal-website) 2>/dev/null || true
docker rm $(docker ps -a -q --filter ancestor=personal-website) 2>/dev/null || true

# Remove old image if it exists
echo -e "${YELLOW}Removing old image if it exists...${NC}"
docker rmi personal-website 2>/dev/null || true

# Build the new image
echo -e "${YELLOW}Building new Docker image...${NC}"
docker build -t personal-website .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Docker image built successfully!${NC}"
    
    # Run the container
    echo -e "${YELLOW}Starting container...${NC}"
    docker run -d -p 8080:80 personal-website
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Container started successfully!${NC}"
        echo -e "${GREEN}Website is now available at http://localhost:8080${NC}"
    else
        echo -e "${RED}Failed to start container${NC}"
        exit 1
    fi
else
    echo -e "${RED}Failed to build Docker image${NC}"
    exit 1
fi 