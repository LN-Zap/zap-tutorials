set -e

yarn docz:build

cd .docz/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:LN-Zap/zap-tutorials.git master:gh-pages