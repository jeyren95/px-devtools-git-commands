const http = require("http")
const host = '0.0.0.0';
const port = 8000;

// comment 1


const requestListener = function (req, res) {
    res.writeHead(200);
    // OS assist to send this info from the node to browser
    // browser will then read this file and render it on the browser
    res.end("My first server! This is an edited message");
};

// shell will find a program name that matches "node"
    // everything on your computer is run on processes
    // OS is like a manager the oversees the execution of all these processes so they can share the RAM, memory, hardware etc
    // it also takes note of all the sockets (probably the port)
    // node is a process, browser is also a process with different ids given by the OS
        // by default, they cannot communicate w each other
        // OS will assist the browser, send a message to the node to send back to the browser

// the node server is listening on a port
    // every unique process is listening on a different port
// browser makes a http request on port 8000, and sends the request to the browser
// the browser then sends a message to the node server
// the node server then sends back the requested stuff back to the OS, which sends to the browser to render to the user



const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});