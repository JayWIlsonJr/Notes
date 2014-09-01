# Homework Review
- https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries

# CSSLint

```sh
$ npm -g install csslint
```

# Terminal basics

```sh
# make a directory
$ mkdir <directory-name>

# move into a directory
$ cd <directory-name>

# list the contents of a directory
$ ls <directory-name>

# the symbol for the current directory is a dot
$ ls . # this lists the contents of the current directory

# the symbol for the parent directory is ..
$ cd .. # this moves up a directory
```

# Git basics
To use the basics of git, you can think of it as a photo booth. It takes a snapshot of your project at a certain point in time, but it will only snapshot the things you have placed in the "staging area" (the booth, in this analogy).

## Creating a repository on your computer

```sh
git init .
```

## Adding files to the staging area

To add a single file named somefile.html:

```sh
$ git add somefile.html
```

Most of the time though, you want to track *all* files. You can do this by adding the current directory.

```sh
$ git add .
```

If you've deleted files, you'll need use the `-u` flag:

```sh
$ git add -u .
```

## Checking the status
```sh
$ git status
```

## Committing files
Now that you have files in the staging area, you can save a snapshot of the staging area using a commit.

```sh
$ git commit
```

This will open a text editor, probably Atom. (See [Configuring git editor](#Configuring git editor) if Atom doesn't open.)

Enter a commit message as the first line in the editor (e.g. "Initial commit" or "Fix the font in index.html"). Save the document in the editor and close the window. git will finish running in the terminal and you should see output like the following:

```
$ git commit
[master 7b84c79] Fix font in index.html
1 file changed, 12 insertions(+), 2 deletions(-)
```

## Pushing to GitHub

First you'll need to make a repository on GitHub (replace `<projectname>` with the name of your project):

```sh
$ hub create <projectname>
```

Or if the repository has already been created on GitHub (replace `<projectname>` with the name of your project):

```sh
$ hub remote add <projectname>
```

Then, push your commits to GitHub. The first time, you'll need to use:

```sh
$ git push -u origin master
```

After that, you can just use:
```sh
$ git push
```

If you use the wrong command, it might give you an error, but it won't hurt anything, so don't worry too much about remembering whether you've already pushed.

## Summary

```sh
$ git init .
# add some files
$ git add .
$ git commit
$ git push
```

# HTML
- table
- form
- input
- textarea
- label
- select / option
- button

# CSS
## Vocabulary
```css
div > a // selector
{
  border-color: red;
  // property: value;
  // Also, the whole line is a "rule"
}

::before { } // pseudoelement
:hover { } // pseudoclass

// Muliple selectors for a group of rules

a:hover,
a:active {
   color: chartreuse;
}
```

## Properties
- clear
- overflow
- vertical-align
- ::before
- border-radius
- linear-gradient
- general/adjacent sibling

## Specificity
http://css-tricks.com/specifics-on-css-specificity/

## Overflow
http://css-tricks.com/the-css-overflow-property/

# Pixel Perfect
## Sip
http://theolabrothers.com/sip/

## How to screenshot to Desktop
Command + Shift + 4

## Screenshot to Clipboard
Control + Command + Shift + 4

Also see http://support.apple.com/kb/PH11229

## Pixel Perfect Precision
http://ustwo.com/ppp/

## Placeholder images
http://placekitten.com

# How to clear
- using a div: http://jsbin.com/nezufu/1/edit
- using a pseudoelement: http://jsbin.com/nezufu/6/edit
- `overflow: auto` clearfix hack (the one I use): http://jsbin.com/nezufu/8/edit

# Configuring git editor
If you ever get stuck in the command line editor that looks something like:

![](http://d.pr/i/NODo.png)

Type the following to quit:

```
:q!
```

It will show up in the bottom left corner, then hit Enter and vim will die.

Then make sure you use:

```sh
git config --global core.editor "atom --wait"
```
