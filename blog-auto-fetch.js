// Automated LinkedIn Blog Fetching System
// This script can automatically fetch and display your latest LinkedIn posts

class LinkedInBlogFetcher {
    constructor() {
        this.apiUrl = 'YOUR_BLOG_API_ENDPOINT'; // You'll need to set this up
        this.fallbackPosts = this.getFallbackPosts();
    }

    // Fetch latest posts from your API or LinkedIn RSS
    async fetchLatestPosts() {
        try {
            // Option 1: Use your own API endpoint that fetches LinkedIn data
            const response = await fetch(this.apiUrl);
            if (response.ok) {
                const posts = await response.json();
                return posts;
            }
            
            // Option 2: Use LinkedIn RSS feed (if available)
            // Note: LinkedIn company RSS feeds are limited
            
            // Fallback to static posts if API fails
            console.log('Using fallback posts');
            return this.fallbackPosts;
            
        } catch (error) {
            console.error('Error fetching posts:', error);
            return this.fallbackPosts;
        }
    }

    // Fallback posts (current static content)
    getFallbackPosts() {
        return [
            {
                title: "Karnataka's Idea2PoC Grant-in-Aid Scheme – ELEVATE 2025",
                excerpt: "Karnataka startups can get funding up to ₹50 Lakhs, mentorship & incubation opportunities through this innovative funding scheme.",
                date: "Aug 21, 2025",
                tags: ["#Elevate2025", "#StartupFunding"],
                url: "https://www.linkedin.com/company/kuposu-ai/"
            },
            {
                title: "Software Development & Subscription-Based Growth",
                excerpt: "Collaboration opportunity for entrepreneurs and marketers to build digital products with sustainable revenue models.",
                date: "Aug 17, 2025",
                tags: [],
                url: "https://www.linkedin.com/company/kuposu-ai/"
            },
            {
                title: "Expert Meta, Facebook, Instagram & LinkedIn API Integrations",
                excerpt: "Specializing in complex API integrations for social media platforms to enhance business connectivity and automation.",
                date: "Jul 31, 2025",
                tags: ["#MetaAPI", "#FacebookAPI"],
                url: "https://www.linkedin.com/company/kuposu-ai/"
            },
            {
                title: "Automate Your Small Business with AI",
                excerpt: "Help small businesses automate operations and scale effortlessly using cutting-edge AI technologies and smart solutions.",
                date: "Jul 25, 2025",
                tags: [],
                url: "https://www.linkedin.com/company/kuposu-ai/"
            },
            {
                title: "AI-Powered Social Media Marketing Platform",
                excerpt: "Building an AI platform for influencer marketing with advanced tech stack to revolutionize digital marketing strategies.",
                date: "Jun 01, 2025",
                tags: ["#AI", "#InfluencerMarketing"],
                url: "https://www.linkedin.com/company/kuposu-ai/"
            },
            {
                title: "Turn Your Ideas Into Powerful Software",
                excerpt: "Develop custom software solutions tailored to unique business needs with our expertise in modern development practices.",
                date: "May 20, 2025",
                tags: [],
                url: "https://www.linkedin.com/company/kuposu-ai/"
            }
        ];
    }

    // Generate HTML for a single blog post
    generatePostHTML(post) {
        const tagsHTML = post.tags.length > 0 ? 
            `<div class="blog-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>` : '';

        return `
            <article class="blog-card">
                <div class="blog-header">
                    <div class="blog-date">${post.date}</div>
                    ${tagsHTML}
                </div>
                <div class="blog-content">
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                </div>
                <div class="blog-footer">
                    <a href="${post.url}" target="_blank" class="blog-link">
                        <span>Read More</span>
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </article>
        `;
    }

    // Render all posts to the blog grid
    async renderPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        // Show loading state
        blogGrid.innerHTML = '<div class="blog-loading">Loading latest posts...</div>';

        try {
            const posts = await this.fetchLatestPosts();
            const postsHTML = posts.map(post => this.generatePostHTML(post)).join('');
            blogGrid.innerHTML = postsHTML;
            
            // Add animation to new posts
            this.animateNewPosts();
            
        } catch (error) {
            console.error('Error rendering posts:', error);
            blogGrid.innerHTML = '<div class="blog-error">Unable to load posts. Please try again later.</div>';
        }
    }

    // Animate new posts when they load
    animateNewPosts() {
        const cards = document.querySelectorAll('.blog-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Initialize the blog fetcher
    init() {
        // Load posts when page loads
        document.addEventListener('DOMContentLoaded', () => {
            this.renderPosts();
        });

        // Auto-refresh posts every 30 minutes (optional)
        setInterval(() => {
            this.renderPosts();
        }, 30 * 60 * 1000);
    }
}

// Initialize the blog fetcher
const blogFetcher = new LinkedInBlogFetcher();
blogFetcher.init();