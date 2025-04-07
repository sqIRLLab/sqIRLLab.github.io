# sqIRL

## Installation & Development

```bash
npm install
npm run setup
npm run dev
```

Prefer ``npm watch`` over ``npm setup`` when tweaking css.

## Modifying information

Svelte (the used framework) splits logic into two folders ``lib`` and ``routes``.
The ``lib`` folder contains components and shared functionality.
The ``routes`` folder informs (sub)page structure and functionality.

There are three common things you probably want to edit if you're reading this.

- Publication records: ``src/routes/publications/+layout.svelte``.
- People: ``src/routes/people/+layout.svelte``.
- Events: ``src/routes/events/+layout.svelte``.

## Deployment

Just run the following command and then push to github.

```bash
npm run build
```
