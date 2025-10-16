// Google Apps Script for LinkedIn Blog API
// Deploy this as a web app to create an API endpoint for your blog posts

function doGet(e) {
  try {
    // You can manually update this array when you post new articles
    // Or integrate with LinkedIn API (requires LinkedIn Developer access)
    const blogPosts = [
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

    // Add timestamp for caching
    const response = {
      posts: blogPosts,
      lastUpdated: new Date().toISOString(),
      total: blogPosts.length
    };

    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      });

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        error: 'Failed to fetch blog posts',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to manually add a new blog post
function addNewPost(title, excerpt, tags = [], url = "https://www.linkedin.com/company/kuposu-ai/") {
  // This function can be called to add new posts
  // You would need to modify the blogPosts array above
  const newPost = {
    title: title,
    excerpt: excerpt,
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    }),
    tags: tags,
    url: url
  };
  
  // Add logic here to prepend the new post to your array
  // and save it to a Google Sheet or other storage
  
  return newPost;
}