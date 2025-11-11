// Blog posts data
const blogPosts = [
    {
        date: '2025-01-15',
        title: 'Getting Started with Modern Web Development',
        description: 'An overview of the latest tools and frameworks that make web development faster and more efficient. Learn about the ecosystem and best practices.',
        slug: 'getting-started-modern-web-dev'
    },
    {
        date: '2025-01-08',
        title: 'Understanding Async Programming',
        description: 'A deep dive into asynchronous programming patterns, promises, async/await, and how to handle complex asynchronous flows in JavaScript.',
        slug: 'understanding-async-programming'
    },
    {
        date: '2025-01-01',
        title: 'The Future of Frontend Frameworks',
        description: 'Exploring emerging trends in frontend development, from server components to new rendering strategies and what they mean for developers.',
        slug: 'future-of-frontend-frameworks'
    },
    {
        date: '2024-12-20',
        title: 'Building Scalable Applications',
        description: 'Best practices for architecting applications that can grow with your user base. Learn about microservices, caching strategies, and database optimization.',
        slug: 'building-scalable-applications'
    }
];

// Format date to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Render blog posts
function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blogPosts');
    
    if (!blogPostsContainer) {
        console.error('Blog posts container not found');
        return;
    }

    if (blogPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p style="color: var(--text-secondary);">No blog posts yet. Check back soon!</p>';
        return;
    }

    blogPostsContainer.innerHTML = blogPosts.map(post => `
        <article class="blog-post">
            <div class="post-date">${formatDate(post.date)}</div>
            <h2 class="post-title">
                <a href="posts/${post.slug}.html">${post.title}</a>
            </h2>
            <p class="post-description">${post.description}</p>
            <a href="posts/${post.slug}.html" class="read-more">Read more</a>
        </article>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

