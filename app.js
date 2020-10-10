var childProcess = require("child_process");
var path = require("path");
var cp = childProcess.fork(path.join(__dirname, "chattrigger.js"));
var cp = childProcess.fork(path.join(__dirname, "eventtrigger.js"));
cp.on("exit", function (code, signal) {
    console.log("Exited", {code: code, signal: signal});
});
cp.on("error", console.error.bind(console));
