## The User
You are responsible for giving `commands` to The Shell to accomplish the current goal.

These are the commands you can use:

#### ls
`ls` stands for `list`. The Shell will tell you what files and folders are in the directory where it is currently standing.
#### cd `<name-of-directory>`
`cd` stands for `change directory`. The Shell will move to the directory you tell it to, but only if it exists.
#### cd ..
`..` is a special keyword that means `the parent of the current directory`. The Shell will move backwards one directory when you give it this command.
#### mkdir `<name-of-directory>`
`mkdir` stands for `make directory`. The Shell will create a new directory with the specified name inside of the directory where it is currently standing.
#### rm -r `<name-of-directory>`
`rm -r` stands for `remove recursive`. The Shell will delete the directory that you specify and everything inside of it. Use this if you accidentally told The Shell to create a directory in the wrong place.
#### bash `<name-of-shell-script>`
`bash` is the name of the computer language you are using to give commands to The Shell. Once you find the `create_log.sh` script, use this command to run it.
#### mv `<name-of-file-to-move>` `<name-of-folder-where-you-want-to-move-the-file>`
`mv` stands for `move`. The Shell will move the specified file to the specified destination directory. __NOTE: `..` is a perfectly acceptable destination.__

__NOTE:__ There is no "undo" command. If you say a command that works, you have to live with the consequences.

## The Shell
You are responsible for receiving `commands` from The Shell to accomplish the current goal.

__When the round begins, you must start at the directory marked with a tilde (~). This is the home directory.__ Stand facing away from the root directory (marked with a /).

These are the commands you might receive:

#### ls
`ls` stands for `list`. Look at your feet, and read off the names of all the files and directories that are in front of you and directly connected to where you are currently standing.
#### cd `<name-of-directory>`
`cd` stands for `change directory`. Move to the directory they name, but only if it is directly connected to where you are currently standing. If the directory they named is not connected to you, tell them "directory not found", and suggest that they use `ls` to see what directories _are_ connected.
#### cd ..
`..` is a special keyword that means `the parent of the current directory`. Move backwards one directory.
#### mkdir `<name-of-directory>`
`mkdir` stands for `make directory`. Write the name of the new directory on a Post-It, stick it to the floor in front of you, and draw a line connecting it to where you are standing. __If a directory with that name already exists, do not create a duplicate. Tell The User that directory already exists.__
#### rm -r `<name-of-directory>`
`rm -r` stands for `remove recursive`. If a Post-It for the named directory is directly connected to where you are currently standing, remove it and everything attached to it. If the directory they named is not connected to you, tell them "directory not found", and suggest that they use `ls` to see what directories _are_ connected.
#### bash `<name-of-shell-script>`
`bash` is the name of the computer language you are using to give commands to The Shell. If the shell script they named is directly connected to where you are standing, ask The Referee to run it.
#### mv `<name-of-file-to-move>` `<name-of-folder-where-you-want-to-move-the-file>`
`mv` stands for `move`. Move the Post-It they named to the directory they named. __NOTE: Both the Post-It and the destination directory must be directly connected to where you are currently standing.__ __ANOTHER NOTE: `..` is a perfectly acceptable destination.__

__NOTE:__ There is no "undo" command. If The User gives you a command that works and then tries to back out, do it anyway.

## The Referee
You are responsible for helping out The Shell to make sure all of The User's commands are valid. For example, if The User gives the command `cd Applications`, and there is no Applications directory in front of The Shell, then The Shell should not move, and you or The Shell should tell The User what went wrong.

Another common mistake: if The User says `mv log.txt small_fireplace`, but The Shell is not directly connected to `small_fireplace`, then this command fails, and you should explain to The User why it failed.

In Round 2, you are also responsible for running the `create_log.sh` shell script. If The Shell is in the Applications directory and The User gives the `bash create_log.sh` command, then you must create a new log: write down `log.txt` on a Sticky-Note, place it in front of the Applications directory, and draw a line connecting the two. __NOTE:__ Two files cannot have the same name in the same directory. So, if The User runs `create_log.sh` multiple times (and they should), create `log1.txt`, `log2.txt`, and so on.

These are the commands The User might use:

#### ls
`ls` stands for `list`. The Shell will tell you what files and folders are in the directory where it is currently standing.
#### cd `<name-of-directory>`
`cd` stands for `change directory`. The Shell will move to the directory you tell it to, but only if it exists.
#### cd ..
`..` is a special keyword that means `the parent of the current directory`. The Shell will move backwards one directory when you give it this command.
#### mkdir `<name-of-directory>`
`mkdir` stands for `make directory`. The Shell will create a new directory with the specified name inside of the directory where it is currently standing.
#### rm -r `<name-of-directory>`
`rm -r` stands for `remove recursive`. The Shell will delete the directory that you specify and everything inside of it. Use this if you accidentally told The Shell to create a directory in the wrong place.
#### bash `<name-of-shell-script>`
`bash` is the name of the computer language you are using to give commands to The Shell. Once you find the `create_log.sh` script, use this command to run it.
#### mv `<name-of-file-to-move>` `<name-of-folder-where-you-want-to-move-the-file>`
`mv` stands for `move`. The Shell will move the specified file to the specified destination directory. __NOTE: `..` is a perfectly acceptable destination.__

__NOTE:__ There is no "undo" command. If you say a command that works, you have to live with the consequences.
