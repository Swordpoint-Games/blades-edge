# Blade's Edge
Long ago, there was peace in the land of Derante. Humans lived side by side with magical creatures known as Drakians. Some were kept as pets, others partners in journeys, and even more to help with work. But then, Derante was attacked by a group calling themselves "Blade". They claimed that they were the rightful rulers of the land, and, knowing that the many powers of Drakians were the only things that could stop them, they captured all Drakians, and took over Derante. 500 years later, Drakians, who were thought by the citezens to be extinct, are appearing again, and a group of people, known simply as The Beacon, are trying to locate all of the Mystic Drakians, the most powerful of all the Drakians, in order to thwart Blades secret plans and take back Derante...

## Instructions

### Summary

* Lear JavaScript
* Install and learn VS Code
* Install and learn Git
* Install and learn node.js
* Install and learn Grunt CLI(command line interface)
* Sign up for GitHub
* Clone this repo to your computer

### Install and learn command line terminal
Both Windows and Mac have a Terminal where you can type on the command line and enter commands. The terminals that come preinstalled in Mac and Windows aren't great. Here are some alternatives:

* [Mac iTerm](https://iterm2.com)
* [Windows Terminal](https://github.com/microsoft/terminal)

Then learn how to use your terminal with tutorial videos like [this one for Mac](https://www.youtube.com/watch?v=aKRYQsKR46I) and [this one for Windows](https://www.youtube.com/watch?v=MBBWVgE0ewk).

### Install and learn Git
We use Git to version control our code and collaboratively code on GitHub. Go to the [Git website](https://git-scm.com/downloads) to download and install. If you want to learn how to use Git on the command line in addition to VS Code, [watch this video](https://www.youtube.com/watch?v=USjZcfj8yxE).

### Sign up for and learn GitHub
We use GitHub to collaboratively code with Git. It's how we can all code on our computers, and then share our work in one repository on GitHub. Go to [GitHub](https://github.com) and sign up for a new account. Then follow the [guides](https://guides.github.com) published by GitHub to learn how to use it.

### Install and learn VS Code
This is the code editor we use. You can also use other editors like [Atom](https://atom.io) or [Sublime](https://sublimetext.com). Go to the [VS Code website](https://code.visualstudio.com/) to download and install. Then watch the [video tutorials](https://code.visualstudio.com/docs/introvideos/basics) and read other documentation to learn. Pay particular attention to using GitHub in VSCode with [this video](https://www.youtube.com/watch?v=Fk12ELJ9Bww).

### Install and learn node.js
This is the JavaScript programming language interpreter we use to build this game. Go to the [Node.js website](https://nodejs.org) to download and install. Then learn Javascript on [Codecademy](https://www.codecademy.com/learn) (you can also use [Khan Academy](https://khanacademy.org) but I found it not to be as good as Codecademy).

### Install and learn Grunt CLI (command line interface)
Grunt is a web server (just like a public website has to serve their pages). We need a web server to serve up the page that will play our game. At some point we can "bundle" the game into something other than a webpage like an Android or Apple App, but using this web server is the easiest way to get started with developing the game.

Go to the [Grunt website](https://gruntjs.com/getting-started) to download and install. There isn't a whole lot to learn with Grunt CLI other than how to run the server, which is explained below. So for now just install it and make sure you can run the `grunt` command in your terminal.

If you can't run `grunt`, then it means it is not in your terminal PATH, which needs to be fixed. Raise a GitHub Issue if you can't figure this out and we'll document how to fix it here.


### Clone this repo onto your computer
Once you know how to use VS Code, Git, and GitHub, you are ready to clone this repo. You're already at the repo if you're reading these instructions, so look for the green button that says 'Code' at the top right of this page, click it, and then click the 'Copy' button or copy the URL to your clipboard.

Now you can either go to your terminal, change directory to where you want to store your code repositories, and run a command like `git clone https://github.com/Grizzlyslayer/blades-edge.git` or you can go into VS Code and [clone the repository](https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository).

(I'm on a Mac and store my code in `/Users/oscar/Coding` which puts this repo at `/Users/oscar/Coding/blades-edge` after I clone it)


### Get access to commit to directly to this repository
Ask an existing contributor like Oscar or Enderdub to add you as a collaborator to this repository. Give him your GitHub profile name and he can add you.

### Learn JavaScript



The Programming Language we use is a version of JavaScript that is optimized for top down and 2d games, so it is a good idea to learn JavaScript before Phaser.

* Codecademy has a JavaScript course
### Learn Phaser 

Phaser is the Javascript game engine we use. There is a lot to learn.

* Codecademy has a Phaser course (FIXME: Add link)
* Phaser.io has a great [examples section](https://phaser.io/examples/v3) that lets you edit the examples right in your web browser


### Start web server and go to the game in your web browser

Open a terminal and change to your `blades-edge` directory where you cloned this repo. Then run `grunt server` and go to [https://localhost:8000](https://localhost:8000) in your web browser.

You should see the game!

If you edit the code in VS Code, you should be able to save the code and then refresh your web browser to see the updated game.


### Contribute code!

Following what you learned with Git and GitHub you should now be able to create code branches, commit and push code up to the repository, and then submit pull requests to get code merged into the `master` branch.
