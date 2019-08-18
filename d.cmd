@ECHO OFF
echo 'deploying...'
cd dist
echo 'removing old git files...'
rd/s/q .git
echo 'reinit git env'
git init
git remote add origin git@gitee.com:zsh2401/yearn4autumn.git
echo 'adding...'
git add .
git commit -m "deploy"
echo 'pushing...'
git push -f --set-upstream origin master:www