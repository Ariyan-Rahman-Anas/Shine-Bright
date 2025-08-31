#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git stash
git pull origin development
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload 17

echo "Deployment Finished!"


# runn command in ./script path
# git update-index --add --chmod=+x deploy.sh

# check successful deployment
#ls -l 