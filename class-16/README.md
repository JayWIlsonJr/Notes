# 09/22/14

# Deploy Surf and Paddle to GitHub Pages

```sh
$ git checkout -b gh-pages
$ git push origin gh-pages
```

# Deploy a site using tiy-webapp to GitHub Pages

```sh
$ gulp build
$ git add .
$ git commit
$ git push origin master
$ gulp deploy
```

# git branching

```sh
$ git branch gh-pages
$ git checkout gh-pages
# Equivalent
$ git checkout -b gh-pages
```
