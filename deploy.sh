#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Building portfolio for GitHub Pages..."

# Build the project
npm run build

echo "✅ Build completed!"
echo "📁 Files are ready in dist/public folder"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push this code to your GitHub repository"
echo "2. Go to Settings > Pages in your repository"
echo "3. Select 'GitHub Actions' as source"
echo "4. The workflow will automatically deploy your site"
echo ""
echo "Your site will be available at: https://yourusername.github.io/your-repo-name"