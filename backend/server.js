const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { parseString } = require('xml2js');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8083;

// Enable CORS for all routes
app.use(cors());

// Cache configuration
const CACHE_FILE = path.join(__dirname, 'blog-posts-cache.json');
const CACHE_TTL = 3600000; // 1 hour in milliseconds

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../')));

// API endpoint to fetch latest blog posts
app.get('/api/posts', async (req, res) => {
    try {
        console.log('API request received for /api/posts');
        
        // Check if cached data exists and is still valid
        if (fs.existsSync(CACHE_FILE)) {
            const cacheStats = fs.statSync(CACHE_FILE);
            const cacheAge = Date.now() - cacheStats.mtimeMs;
            
            // If cache is still valid (less than TTL)
            if (cacheAge < CACHE_TTL) {
                console.log('Using cached blog posts');
                const cachedData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
                return res.json(cachedData);
            }
            console.log('Cache expired, fetching fresh data');
        } else {
            console.log('No cache found, fetching fresh data');
        }
        
        // Fetch the RSS feed
        const response = await axios.get('https://blog.couttsnet.com/feed/', {
            headers: {
                'Accept': 'application/rss+xml, application/xml, text/xml',
                'User-Agent': 'Mozilla/5.0 (compatible; PersonalWebsite/1.0; +https://stevec.couttsnet.com)'
            },
            timeout: 5000
        });
        
        // Parse the XML response
        let posts = [];
        parseString(response.data, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
                throw new Error('Failed to parse RSS feed');
            }
            
            if (result && result.rss && result.rss.channel && result.rss.channel[0].item) {
                // Extract post information
                posts = result.rss.channel[0].item.slice(0, 5).map(item => {
                    return {
                        title: item.title[0],
                        link: item.link[0],
                        date: item.pubDate[0]
                    };
                });
                console.log(`Successfully parsed ${posts.length} posts`);
            } else {
                console.error('Unexpected RSS feed structure');
                throw new Error('Unexpected RSS feed structure');
            }
        });
        
        // Cache the results
        fs.writeFileSync(CACHE_FILE, JSON.stringify(posts), 'utf8');
        console.log('Blog posts cached successfully');
        
        // Return the posts
        res.json(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error.message);
        
        // Check if we have cached data we can fall back to
        if (fs.existsSync(CACHE_FILE)) {
            console.log('Using cached blog posts as fallback');
            const cachedData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
            return res.json(cachedData);
        }
        
        // If all else fails, return hardcoded fallback posts
        console.log('Using hardcoded fallback posts');
        const fallbackPosts = [
            {
                title: 'Creating a Nginx Docker Container',
                link: 'https://blog.couttsnet.com/creating-a-nginx-docker-container/',
                date: 'Mon, 09 Dec 2024 09:38:46 +0000'
            },
            {
                title: 'Getting Started with Docker and Kubernetes for Beginners',
                link: 'https://blog.couttsnet.com/getting-started-with-docker-and-kubernetes-for-beginners/',
                date: 'Mon, 09 Dec 2024 08:40:24 +0000'
            },
            {
                title: 'Getting Started With Kubernetes',
                link: 'https://blog.couttsnet.com/getting-started-with-kubernetes/',
                date: 'Sun, 08 Dec 2024 15:14:00 +0000'
            },
            {
                title: 'What is Microsoft Azure?',
                link: 'https://blog.couttsnet.com/what-is-microsoft-azure/',
                date: 'Wed, 13 Mar 2024 09:58:51 +0000'
            },
            {
                title: 'Enable Wired 802.1x – Group Policy',
                link: 'https://blog.couttsnet.com/enable-wired-802-1x-group-policy/',
                date: 'Mon, 28 Mar 2022 15:14:20 +0000'
            }
        ];
        res.json(fallbackPosts);
    }
});

// Catch-all route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Website available at http://localhost:${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api/posts`);
}); 