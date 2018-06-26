### Setting Up Git
NOTE: You are not expected to remember all of these commands. We will be using a lot of commands today to get set up, but after this, using git will get easier.

ANOTHER NOTE: Lines that start with __$__ you are supposed to run in the terminal (but do not type the __$__ sign). Lines that do not start with __$__ are example output. For example, try this:
```
$ echo 'good morning!'
good morning!
```

### Steps

1) Move Shelly the shell to your `adventure-game` directory. (You know how to do this :) Think back to The Shell Game we played yesterday. If you get stuck, ask for help.)

2) Make sure you are actually where you think you are. Run the `pwd` command, which stands for `print working directory`:
```
$ pwd
/Users/missionbit/Desktop/adventure-game
```

2.5) Configure git with your username and e-mail:
```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
Then check that both of these worked. __Remember: you can press the up arrow to go to a previous command.__
```
$ git config --global user.name
"Your Name"
$ git config --global user.email
"email@example.com"
```

3) Turn the directory into a git code repository:
```
$ git init
Initialized empty Git repository in /Users/missionbit/Desktop/adventure-game/.git/
```
4) Check out the new "hidden" directory that git created. The `.git` directory is where your project history is stored. Notice that it doesn't show up if you use `ls` without the `-a` option.
```
$ ls -a
. .. .git
```

5) __ONLY ONE TEAM MEMBER DO THIS:__ create a repository on github called `adventure-game`

5.5) In the repo settings page, add your teammates as collaborators. You will need to know their github usernames.

6) Copy the repository URL. __Make sure to click the `Use HTTPS` button.__ Share the URL with teammates on slack.

7) Configure your local repo so it can push/pull to the github repo. This is called "adding a remote repo":
```
$ git remote add origin <repository-URL-goes-here>
```

8) add the README.md file to the repo, and commit it (commit means save)
```
$ git add README.md
$ git commit --message 'write some kind of message here that describes your first save'
```
Now add the rest of the files in the directory. It doesn't matter whether they are finished yet or not.
```
$ git add blah blah blah more files
$ git commit --message 'write some kind of message here that describes your second save'
```
__NOTE:__ Every time you want to save changes, you need to `git add` to say what files you want to save, and `git commit` to actually do the save.

8.5) Take a breather! Stuff is about to get krayzee. Give yourself a chin scratch with cool gloves.

![resting cat](https://media.giphy.com/media/oPC2PCPuOudeU/giphy.gif)

8.95) Back already? Good. Get your github username and password ready.

9) __ONLY ONE TEAM MEMBER DO THIS (others watch & learn):__ Push your local repo to the remote github repo. You will need your github username and password in order for the push to work.
```
$ git push --set-upstream origin master
Counting objects: 3, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 302 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/bennlich/bennlich.github.io.git
   a638a08..5dcfd00  master -> master
Branch master set up to track remote branch master from origin.
```

10) __ONE OTHER TEAM MEMBER DO THIS (first team member watch & learn):__ pull your teammate's changes (you will need your github username and password)
```
$ git pull --rebase
warning: no common commits
remote: Counting objects: 9, done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 9 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (9/9), done.
From https://github.com/bennlich/bennlich.github.io
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> origin/master
First, rewinding head to replay your work on top of it...
Applying: first commit
Using index info to reconstruct a base tree...
Falling back to patching base and 3-way merge...
Auto-merging index.html
CONFLICT (add/add): Merge conflict in index.html
Auto-merging README.md
CONFLICT (add/add): Merge conflict in README.md
Failed to merge in the changes.
Patch failed at 0001 first commit
The copy of the patch that failed is found in:
   /Users/missionbit/Desktop/adventure-game/.git/rebase-apply/patch

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".

```

11) Time to resolve conflicts! git noticed that you have a different version of the index.html and README.md files saved in your local repo. That's okay! This is what git is all about. To fix this:
    
  a) In Brackets, open up the files that have conflicts. Inside each file, you will see two versions of the code: one that looks like yours, and the other looks like your teammates. git put these two versions here for you so you can decide what to keep and what to get rid of.
    
  b) Decide with your teammate what lines to keep and what lines to delete. Save the file when you're done editing. Don't forget to delete the lines that have a bunch of these `>>>>>>>>>>` `<<<<<<<<<<`.
    
  c) Repeat for all the files with conflicts. If you forget which ones have conflicts, run `git status`.

12) Once you've decided how to resolve all the conflicts, it's time to finish the pull. First add all the files that you fixed:
```
$ git add index.html
$ git add README.md
```

13) Make sure that you didn't miss anything. When you run `git status`, the output should look more or less like this:
```
rebase in progress; onto a638a08
You are currently rebasing branch 'master' on 'a638a08'.
  (all conflicts fixed: run "git rebase --continue")

nothing to commit, working directory clean
```
If it does, finish the merge:
```
$ git rebase --continue
```
If you see this:
```
Applying: first commit
No changes - did you forget to use 'git add'?
If there is nothing left to stage, chances are that something else
already introduced the same changes; you might want to skip this patch.

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```
Then you need to do:
```
$ git rebase --skip
```

14) Finally, push the result of your merge to github:
```
$ git push --set-upstream origin master
```

15) Wow. That was intense! This was complicated because it was the first time getting set up. In the future, pushing and pulling will be simpler. Give yourself a pat on the back and a hug. You're awesome.

