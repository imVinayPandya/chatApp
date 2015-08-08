/**
 * Created by vinay.pandya on 8/7/2015.
 */

function chatIO(io) {
    var onlineUsers = [];
    //console.log(io.ioInstance);
    console.log('function calling.....');
    //when socket connection will established
    io.ioInstance.on('connection', function (socket) {
        console.log('socket connection done');
        //global variable to access current User Name and User Id
        var UserName = '', UserID = '';
        socket.on('newUser', function (userName) {
            console.log('new user event called');
            //assign user name and user id to global variable
            UserName = userName;
            UserID = socket.id;

            //if new user is connected the broadcast message to all other users that new user is connected
           socket.broadcast.emit('chat', userName, 'is Connected.');
            onlineUsers.push({
                name: userName,
                id: socket.id
            });
            io.ioInstance.emit('update-users', onlineUsers);
        });

        socket.on('disconnect', function() {
            console.log('user is disconnected');
        });
    });
}

module.exports = chatIO;