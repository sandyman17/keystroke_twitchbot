// Trigger on Botcommands

let tmi = require('tmi.js')
let settings = require('./settings.js')

let options = {
	options: {
		debug: true,
	},

//Connection to Server and Channel
	connection: {
		cluster: settings.cluster,
		reconnect: settings.reconnect,
	},
	  identity:{
			username: settings.username,
			password: settings.password,
},
	channels: settings.channels,
	};

let client = new tmi.client(options)
client.connect()

let ks = require('node-key-sender')
let robot = require('robotjs')

//Chat Trigger Messages
// !strobo
client.on('message', (channel, tags, message, self) => {
    if (self) return
			// permissions
			let badges = tags.badges || {}
			let isBroadcaster = badges.broadcaster
			let isSub = badges.subscriber
			let isMod = badges.moderator
			let isAble = isBroadcaster || isSub || isMod
    		// command
    		if(message === '!strobo' && isAble) {
			 		// move/click mouse
					robot.moveMouse(850, 950)
					robot.mouseClick()
						// press key
						ks.sendKey('1')
							// response in chat
							client.action(channel, `KEKW KEKW @${tags.username} triggered the Strobo!!!!!! KEKW KEKW`)
							}else
							if(message === '!strobo') {
							client.action(channel, `@${tags.username} You dont have Permissions to trigger this magic Light (Subonly) nvioleNtcry `)
				}
});

// !purple
client.on('message', (channel, tags, message, self) => {
    if (self) return
			// permissions
    	let badges = tags.badges || {}
    	let isBroadcaster = badges.broadcaster
    	let isSub = badges.subscriber
			let isMod = badges.moderator
    	let isAble = isBroadcaster || isSub || isMod
    		// command
    		if(message === '!purple' && isAble) {
					// move/click mouse
					robot.moveMouse(850, 950)
					robot.mouseClick()
						// press key
						ks.sendKey('2')
							// response in chat
        			client.action(channel, `@${tags.username} triggered the Purple-Strobo!!!!!! nvioleNthype`)
							}else
							if(message === '!purple') {
							client.action(channel, `@${tags.username} You dont have Permissions to trigger this magic Light (Subonly) nvioleNtcry `)
    		}
});

// !red
client.on('message', (channel, tags, message, self) => {
    if (self) return
			// permissions
    	let badges = tags.badges || {}
    	let isBroadcaster = badges.broadcaster
    	let isSub = badges.subscriber
			let isMod = badges.moderator
    	let isAble = isBroadcaster || isSub || isMod
    		// command
    		if(message === '!red' && isAble) {
					// move/click mouse
					robot.moveMouse(850, 950)
					robot.mouseClick()
						// press key
						ks.sendKey('3')
							// response in chat
        		client.action(channel, `@${tags.username} triggered the Red-Strobo!!!!!! nvioleNtwhoop`)
						}else
						if(message === '!red') {
						client.action(channel, `@${tags.username} You dont have Permissions to trigger this magic Light (Subonly) nvioleNtcry `)
    		}
});

// !blue
client.on('message', (channel, tags, message, self) => {
    if (self) return
			// permissions
    	let badges = tags.badges || {}
    	let isBroadcaster = badges.broadcaster
    	let isSub = badges.subscriber
			let isMod = badges.moderator
    	let isAble = isBroadcaster || isSub || isMod
    		// command
    		if(message === '!blue' && isAble) {
						// move/click mouse
						robot.moveMouse(850, 950)
						robot.mouseClick()
							// press key
							ks.sendKey('4')
								// response in chat
        				client.action(channel, `@${tags.username} triggered the Blue-Strobo!!!!!! nvioleNtOmg`)
								}else
								if(message === '!blue') {
								client.action(channel, `@${tags.username} You dont have Permissions to trigger this magic Light (Subonly) nvioleNtcry `)
    		}
});

// !yellow
client.on('message', (channel, tags, message, self) => {
    if (self) return
			// Permissions
    	let badges = tags.badges || {}
    	let isBroadcaster = badges.broadcaster
    	let isSub = badges.subscriber
			let isMod = badges.moderator
    	let isAble = isBroadcaster || isSub || isMod
    		// command
    		if(message === '!yellow' && isAble) {
					// move/click mouse
					robot.moveMouse(850, 950)
					robot.mouseClick()
						// press key
						ks.sendKey('5')
							// response in chat
        			client.action(channel, `@${tags.username} triggered the Yellow-Strobo!!!!!! nvioleNtpeace`)
							}else
							if(message === '!yellow') {
							client.action(channel, `@${tags.username} You dont have Permissions to trigger this magic Light (Subonly) nvioleNtcry `)
    		}
});

// !rgb
client.on('message', (channel, tags, message, self) => {
    if (self) return
			// Permissions
    	let badges = tags.badges || {}
    	let isBroadcaster = badges.broadcaster
    	let isSub = badges.subscriber
			let isMod = badges.moderator
    	let isAble = isBroadcaster || isSub || isMod
    		// command
    		if(message === '!rgb' && isAble) {
					// move/click mouse
					robot.moveMouse(850, 950)
					robot.mouseClick()
						// press key
						ks.sendKey('6')
							// respnse in chat
        		client.action(channel, `KEKW KEKW @${tags.username} triggered the RGB-Strobo!!!!!! KEKW KEKW`)
						}else
						if(message === '!rgb') {
						client.action(channel, `@${tags.username} You dont have Permissions to trigger this magic Light (Subonly) nvioleNtcry `)
    	}
});
