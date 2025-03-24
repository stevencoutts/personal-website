#!/bin/bash

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Docker build process...${NC}"

# Stop and remove any existing containers and networks
echo -e "${YELLOW}Stopping and removing existing containers...${NC}"
docker-compose down 2>/dev/null || true

# Build and start the containers
echo -e "${YELLOW}Building and starting containers...${NC}"
docker-compose up --build -d

# Check if containers started successfully
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Containers started successfully!${NC}"
    echo -e "${GREEN}Website is now available at http://localhost:8083${NC}"
    echo -e "${GREEN}Backend API is available at http://localhost:8084${NC}"
else
    echo -e "${RED}Failed to start containers${NC}"
    exit 1
fi 