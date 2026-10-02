# Portfolio

Static site, no build step. Keep `index.html`, `content.js` and `images/` together.

## Add your work
1. Create `images/projects/my-project/` and drop in `cover.jpg` plus `1.jpg`, `2.jpg`...
2. In `content.js`, copy a block inside `projects: [...]` and update the title, category and image paths.
3. Commit and push. Vercel redeploys automatically.

You can upload images directly on GitHub: open the folder, then **Add file > Upload files**.
Your photo goes in `images/profile.jpg`. All text lives in `content.js`.

## Deploy
Push to GitHub, then on vercel.com: **Add New > Project**, import the repo, framework preset **Other**, Deploy.