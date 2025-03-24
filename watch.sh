#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if fswatch is installed
if ! command -v fswatch &> /dev/null; then
    echo -e "${RED}fswatch is not installed. Installing via Homebrew...${NC}"
    brew install fswatch
fi

# Function to rebuild the container
rebuild_container() {
    echo -e "${YELLOW}Changes detected. Rebuilding container...${NC}"
    
    # Stop and remove any existing containers and networks
    echo -e "${YELLOW}Stopping and removing existing containers...${NC}"
    docker-compose down 2>/dev/null || true
    
    # Run the build script
    ./build.sh
}

# Initial build
echo -e "${YELLOW}Performing initial build...${NC}"
./build.sh

# Watch for changes in website files
echo -e "${GREEN}Watching for changes in website files...${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop${NC}"

# Monitor specific file types and directories
fswatch -o \
    website.html \
    styles.css \
    sw.js \
    images/ \
    | while read f; do
        rebuild_container
    done 