const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const robot = require("robotjs");

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('mouseEvent', (data) => {
    const { event, dx, dy } = data;
    if (event === 'move') {
      const mouse = robot.getMousePos();
      robot.moveMouse(mouse.x + dx, mouse.y + dy);
    }
  });

  socket.on('mouseAction', (data) => {
    const { action } = data;
    if (action === 'left_click') {
      robot.mouseClick('left');
    } else if (action === 'right_click') {
      robot.mouseClick('right');
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 6969;
http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
