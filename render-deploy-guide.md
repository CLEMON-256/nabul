# Deploy to Render

This guide explains how to deploy the `school-website` React + Vite app to Render as a static site.

## 1. Prepare the project

1. Open a terminal in `c:\Users\HP\Desktop\school-website`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Verify the app builds successfully:

   ```bash
   npm run build
   ```

The production output will be generated in the `dist/` folder.

## 2. Create a Static Site on Render

1. Sign in to Render at https://render.com.
2. From the dashboard, click **New** and choose **Static Site**.
3. Connect your Git repository that contains this project.

## 3. Configure the Render service

Use the following settings when Render asks for build configuration:

- **Name**: `school-website` (or any friendly name)
- **Branch**: `main` (or the branch you want to deploy)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

Render automatically detects static site frameworks, but setting these values ensures Vite builds correctly.

## 4. Optional settings

- If you want a custom domain, add it after deploy completion in the Render dashboard.
- No additional environment variables are required for this app as currently configured.

## 5. Deploy and verify

1. Click **Create Static Site**.
2. Wait for Render to clone, install, build, and publish the site.
3. When deployment completes, open the provided Render URL to verify the website.

## 6. Troubleshooting

- If Render fails during install, confirm the repository contains `package.json` and `package-lock.json`.
- If build fails, check for syntax or module issues in the app source.
- If the site loads an empty page or 404, verify `dist` is set as the publish directory.

## Notes

- This repository uses Vite and the build output is static, so Render Static Site is the recommended deployment type.
- The site is served from `dist/` after build.
