# Blog

A dreamy, ethereal blog website inspired by Mazzy Star's "So Tonight That I Might See" album aesthetic.

## Features

- 🌙 Dreamy, dark aesthetic inspired by Mazzy Star
- 🎨 Ethereal color palette (deep purples, violets, blacks)
- ✨ Soft glows and subtle animations
- 📱 Fully responsive design
- 🔤 Elegant typography (Playfair Display & Lato)
- 📐 LaTeX/MathJax support for mathematical equations
- ⚡ Fast and lightweight
- 🎯 SEO-friendly structure
- ♿ Accessible markup

## Getting Started

### Option 1: Using npm (Recommended)

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

This will start a live server at `http://localhost:3000` with automatic reloading when you make changes.

### Option 2: Open directly in browser

Simply open `index.html` in your web browser (note: some features may not work without a server).

### Option 3: Use a local server manually

For the best experience, use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Adding Blog Posts

Edit the `blogPosts` array in `script.js`:

```javascript
const blogPosts = [
    {
        date: '2025-01-15',
        title: 'Your Post Title',
        description: 'A brief description of your blog post.',
        slug: 'your-post-slug'
    },
    // Add more posts...
];
```

### Styling

Modify `styles.css` to customize colors, fonts, spacing, and other visual aspects. The CSS uses CSS variables for easy theming:

```css
:root {
    --bg-color: #0f0a1a;
    --text-color: #e8e0f0;
    --link-color: #c8a8e8;
    --accent-purple: #7d5a9e;
    --accent-violet: #a890c8;
    /* ... */
}
```

The theme features:
- Deep purple/black backgrounds
- Lavender/violet accent colors
- Soft text glows and shadows
- Ethereal gradient overlays
- Elegant serif headings (Playfair Display)
- Clean sans-serif body text (Lato)

### Navigation Links

Update the navigation links in `index.html` or `about.html`:

```html
<div class="nav-links">
    <a href="index.html" class="nav-link">Blog</a>
    <a href="about.html" class="nav-link">About</a>
    <a href="https://github.com" class="nav-link">GitHub ↗</a>
</div>
```

## Project Structure

```
blog/
├── index.html              # Main blog page
├── about.html              # About page
├── styles.css              # Stylesheet with Mazzy Star theme
├── script.js               # JavaScript for dynamic content
├── package.json            # npm configuration
├── .gitignore             # Git ignore file
├── posts/                  # Blog post directory
│   ├── template.html       # Template for new posts
│   └── example-with-latex.html  # Example post with LaTeX
├── HOSTING.md              # Hosting guide
└── README.md               # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this blog template for your own projects!

## LaTeX Support

This blog includes MathJax for rendering mathematical equations. Use:
- Inline math: `$E = mc^2$` → $E = mc^2$
- Display math: `$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$`

See `posts/example-with-latex.html` for examples.

## Adding New Pages

1. Create a new HTML file (e.g., `contact.html`)
2. Copy the structure from `about.html`
3. Update the navigation links in all pages
4. Customize the content

## Hosting

See `HOSTING.md` for detailed instructions on hosting your blog on:
- GitHub Pages (recommended)
- Netlify
- Vercel
- Cloudflare Pages
- Traditional web hosting

## Future Enhancements

- RSS feed
- Search functionality
- Tags/categories
- Markdown support for blog posts
- Static site generator integration
- Comments system

