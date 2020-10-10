// Trigger on Events

let settings = require('./settings.js')
let StreamlabsSocketClient = require('streamlabs-socket-client')
let socket = new StreamlabsSocketClient({
  token: settings.token,
  // gets the streamlabs token from settings.js file
    emitTests: true
    // true if you want alerts triggered by the test buttons on the streamlabs dashboard to be emitted. default false.

});

let ks = require('node-key-sender')
let robot = require("robotjs")

// timeout
function wait(ms){
   let start = new Date().getTime()
   let end = start;
    while(end < start + ms) {
      end = new Date().getTime()
  }
}



//Events Trigger Messages
// follow
socket.on('follow', (data) => {
    // move/click mouse
		robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('f')
        // log event
        console.log("Follow")
          // wait
          wait(2500)
});

// subscriber
socket.on('subscription', (data) => {
    // move/click mouse
		robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('s')
        // log event
        console.log("Sub")
          // wait
          wait(2500)
});

// resubscriber
socket.on('resubscription', (data) => {
    // move/click mouse
		robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('s')
        // log event
        console.log("Re-Sub")
          // wait
          wait(2500)
});

// donation (not working yet)
socket.on('donation', (data) => {
    // move/click mouse
    robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('d')
        // log event
        console.log("Donation")
          // wait
          wait(2500)
});

// bits
socket.on('bits', (data) => {
    // move/click mouse
    robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('b')
        // log event
        console.log("Bits")
          // wait
          wait(2500)
});

// host
socket.on('host', (data) => {
    // move/click mouse
    robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('h')
        // log event
        console.log("Host")
          // wait
          wait(2500)
});

// raid
socket.on('raid', (data) => {
    // move/click mouse
    robot.moveMouse(850, 950)
    robot.mouseClick()
      // press key
      ks.sendKey('r')
        // log event
        console.log("Raid")
          // wait
          wait(2500)
});

socket.connect()
  console.log("Socket Connected!")
