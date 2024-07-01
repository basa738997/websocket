const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    io.emit("max","hello from server")

    socket.on('sony',( msg) =>{

        console.log(msg);
        socket.broadcast.emit('max', msg)
    });
});
// end of socket.io logic

module.exports = socketapi;