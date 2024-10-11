#!/bin/bash
# .gitmodules submodule paths

SUBMODULE_PATH_1=src/modules/1-Home-Module
SUBMODULE_PATH_2=src/modules/2-Service-Module
SUBMODULE_PATH_3=src/modules/3-AboutUs-Module
SUBMODULE_PATH_4=src/modules/4-Donate-Module
# SUBMODULE_PATH_5=src/modules/5-Story-Module
# SUBMODULE_PATH_6=src/modules/6-Store-Module
# SUBMODULE_PATH_7=src/modules/7-CommunityPortal-Module

if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

set -e
set -x  # Enable script debugging
# Update git config to use the GitHub access token for authentication
git config --global url."https://${GITHUB_ACCESS_TOKEN}:x-oauth-basic@github.com/".insteadOf "https://github.com/"
# Initialize and update submodules
git submodule init
git submodule update --init --recursive
# Function to checkout and pull the latest code from master branch in submodule
update_submodule() {
  local SUBMODULE_PATH=$1
  echo "Updating submodule in $SUBMODULE_PATH"
  cd $SUBMODULE_PATH || { echo "Failed to cd into $SUBMODULE_PATH"; exit 1; }
  
  # Check if the branch exists
  if git show-ref --verify --quiet refs/heads/main; then
    git checkout main
  else
    echo "Branch 'main' not found in $SUBMODULE_PATH. Check out to 'master' instead."
    git checkout master
  fi

  git pull origin main || git pull origin master
  cd - || exit 1
}
# Checkout and pull latest code for each submodule – 
update_submodule $SUBMODULE_PATH_1
update_submodule $SUBMODULE_PATH_2
update_submodule $SUBMODULE_PATH_3
update_submodule $SUBMODULE_PATH_4
# update_submodule $SUBMODULE_PATH_5
# update_submodule $SUBMODULE_PATH_6
# update_submodule $SUBMODULE_PATH_7
# Check the status of the submodules
echo "Submodule status:"
git submodule status --recursive
# Run the original install command
npm install