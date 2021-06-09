const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 3000
});

wss.on('connection', (ws) => {
    console.log('one is connected');
    // 接受消息
    ws.on('message', function(msg) {
        console.log(msg);
    });
    // 主动发送
    ws.send('Message from server');
})