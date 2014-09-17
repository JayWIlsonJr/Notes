# 09/17/14

## `arguments`
Not an array, just acts like one

## git

### pretty log

```sh
$ git config --global format.pretty "%C(yellow)%h%Creset %s %C(red)(%an, %cr)%Creset"
```

- Commits are created with `git commit`
- Branches are just labels for commits
- "Merging branches" means merging the histories of commits that two branches point at.
- Most git commands operate on where HEAD is pointed
- `git pull` is just `git fetch` and `git merge` in one command. It pulls in the history from the remote, and then merges it into HEAD.
