# Twitch DMX Bot #

this script is an "extension" to the socket-presses-keys script on
https://github.com/KayPure/socket-presses-keys

it connects to a twitch-irc-chat and triggers keystrokes
on chatcommands and events for daslight4, an dmx lightning software.
however, u can use any program to trigger an hotkey with this script.

please note:
make sure, u connect a bot account to this script. dont use ur main streamer account!!!
make sure, the script and the program where to trigger hotkeys is running on a dedicated
pc, which is not in use while streaming, because of the mouse movement/clicking

how to install:
```
clone the repo
cd to repo dir
npm install
edit settings_blank.js, fill in your credentials and rename it to settings.js
node app
trigger an alert with streamlabs.com or with e.g !strobo in ur twitchchat
whatch the magic happens ;)
```

tip:
use a second pc/phone/tablet to trigger events or commands to see exactly
what happens on a trigger.

dependencies:
```
child_process
node-key-sender
path
robotjs
streamlabs-socket-client
tmi.js
```

eventtrigger:

this will trigger a keystroke on e.g a new sub. it will move the mouse to a specific position
(in my case, the daslight4 window), simulate a mouseclick and then hit  "s" which will trigger
a lightning scene in daslight4.
u can edit the mousepositions and keystrokes for every event in eventtrigger.js with:
```
// move/click mouse
robot.moveMouse(850, 950)
robot.mouseClick();
  // press key
  ks.sendKey('f');
```
we are working on a better soloution for the keystrokes, something like "find window and press xy"
to get rid of moving and pressing the mouse.
the timeout (wait) on every command is to prevent daslight4 to switching the scene on/off
if more than one event happens at the same time.  


chattrigger:

it's basically the same as the event trigger, except that the script listen
to specific chat commands to trigger a keystroke. u can edit the keystrokes and mousepositions
the same way as for the eventtrigger in chattrigger.js with:
```
// move/click mouse
robot.moveMouse(850, 950)
robot.mouseClick();
  // press key
  ks.sendKey('f');
```

permissions:

since we dont have cooldowns on the commands yet, the permission to trigger
chatcommand is broadcaster/sub/mod only. we are getting the persmissions from
the chat badges:
```
let badges = tags.badges || {}
let isBroadcaster = badges.broadcaster
let isSub = badges.subscriber
let isMod = badges.moderator
```

you can change the permissions on every command with the following line:
```
const isAble = isBroadcaster || isSub || isMod;
```
if you want the command set to mod-only, just edit the line to:
```
const isAble = isMod;
```
for sub only:
```
const isAble = isSub;
```
we check with "isAble", what permission is require to trigger the command.
```
if(message === '!command' && isAble) {
```

issues:
```
commands has no cooldown yet
the window in which the keystroke should go has to be in foreground
donation trigger not working
```
