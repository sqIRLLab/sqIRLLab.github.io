# sqIRL Lab Website

The official website for the Interpretable Representation Learning (sqIRL) lab at the University of Antwerp.

## Quick Start

Install [Node.js](https://nodejs.org/en) if you haven't already, then run:

```bash
npm install       # Install dependencies
npm run dev       # Start development server
```

Visit `http://localhost:5173` to preview your changes locally.

## Deployment

Build and deploy changes to the live website (or use the built-in git tool in your IDE):

```bash
npm run build     # Build for production
git add .
git commit -m "Update content"
git push          # Deploy to GitHub Pages
```

## Editing Content

All website content is stored as JSON files in `src/data/`. Simply edit these files to update the website:

### Adding Publications

Edit `src/data/publications.json`:

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

Edit `src/data/people.json`:

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

Edit `src/data/events.json`:

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

Edit `src/data/news.json`:

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
├── data/           # JSON content files (edit these!)
│   ├── people.json
│   ├── publications.json
│   ├── events.json
│   └── news.json
├── lib/            # Reusable components
└── routes/         # Page structure and layouts
```

## Need Help?

- **Development server not working?** Try `npm run setup` first
- **Changes not showing?** Hard refresh your browser (Ctrl+Shift+R)
- **Questions?** Contact the lab maintainer
