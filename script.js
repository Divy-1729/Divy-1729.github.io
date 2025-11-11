// Blog posts data
const blogPosts = [
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
        blogPostsContainer.innerHTML = '<p style="color: var(--text-secondary);">Coming Soon</p>';
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

