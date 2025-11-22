# sqIRL Lab Website

The official website for the Interpretable Representation Learning (sqIRL) lab at the University of Antwerp.

## Quick Start

Install [Node.js](https://nodejs.org/en) if you haven't already, then run:

```bash
npm install       # Install dependencies
npm run dev       # Start development server
```

Visit `http://localhost:4321` to preview your changes locally.

## Deployment

Changes are automatically deployed to GitHub Pages when you push to the main branch:

```bash
git add .
git commit -m "Update content"
git push          # Automatically builds and deploys via GitHub Actions
```

The GitHub Actions workflow handles building and deployment automatically. You can monitor the deployment status in the [Actions tab](../../actions).

## Editing Content

All website content is stored as individual JSON files in `src/content/`. The build process validates all data strictly - any errors in your JSON files will cause the build to fail with clear error messages.

### Data Validation Rules

All content files are validated during build. Common validation requirements:

- **Dates**: Must be in `YYYY/MM/DD` format (e.g., `2024/01/15`)
- **URLs**: Must start with `http://` or `https://`
- **Images**: Must end with `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, or `.svg`
- **Strings**: Cannot be empty
- **Email**: Must be a valid email address (for home page contact)
- **No extra fields**: Unknown fields will cause build errors

### Adding Publications

Create a new JSON file in `src/content/publications/` (e.g., `your-paper.json`):

```json
{
  "title": "Your Paper Title",
  "date": "Month YYYY",
  "published": "Venue Name",
  "link": "https://arxiv.org/...",
  "image": "people/author.jpg",
  "description": "Brief description of your work"
}
```

### Adding People

Create a new JSON file in `src/content/people/` (e.g., `firstname.json`):

```json
{
  "name": "Full Name",
  "status": "PhD student | Professor | etc.",
  "specialty": "Research focus area",
  "image": "people/photo.jpg",
  "link": "https://personal-website.com"
}
```

### Adding Events

Create a new JSON file in `src/content/events/` (e.g., `event-name.json`):

```json
{
  "title": "Event name",
  "date": "DD Month YYYY",
  "link": "https://event-link.com",
  "image": "people/presenter.jpg",
  "description": "Event description"
}
```

### Adding News

Create a new JSON file in `src/content/news/` (e.g., `2025-01-news-title.json`):

```json
{
  "date": "Month YYYY",
  "title": "News headline",
  "description": "Detailed description",
  "link": "https://optional-link.com"
}
```

## Project Structure

```text
src/
├── content/        # JSON content files (edit these!)
│   ├── people/         # Individual person profiles
│   ├── publications/   # Individual publications
│   ├── events/         # Individual events
│   ├── news/           # Individual news items
│   └── home/           # Homepage content
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
└── pages/          # Page routes
```

## Need Help?

- **Development server not working?** Try `npm install` first
- **Changes not showing?** Hard refresh your browser (Ctrl+Shift+R)
- **Build failing?** Check the [GitHub Actions logs](../../actions) for details
- **Questions?** Contact the lab maintainer
