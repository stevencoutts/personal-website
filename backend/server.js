const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');
const parser = new Parser();

const app = express();
const port = 8083;

app.use(cors());

app.get('/api/posts', async (req, res) => {
    try {
        const feed = await parser.parseURL('https://blog.couttsnet.com/feed/');
        const posts = feed.items
            .slice(0, 5)
            .map(item => ({
                title: item.title,
                link: item.link,
                date: item.pubDate
            }));
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 