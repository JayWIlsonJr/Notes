# 09/17/14

## `arguments`
Not an array, just acts like one

## git

### pretty log

```sh
$ git config --global format.pretty "%C(yellow)%h%Creset %s %C(red)(%an, %cr)%Creset"
```

### Summary of today's topics
- Commits are created with `git commit`
- Branches are just labels for commits
- "Merging branches" means merging the histories of commits that two branches point at.
- Most git commands operate on where HEAD is pointed
- `git pull` is just `git fetch` and `git merge` in one command. It pulls in the history from the remote, and then merges it into HEAD.

### Resources
- https://try.github.io/
- https://guides.github.com/introduction/flow/
- https://guides.github.com/activities/forking/
- https://help.github.com/articles/github-glossary
- https://help.github.com/articles/what-are-other-good-resources-for-learning-git-and-github
