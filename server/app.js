require('dotenv').config({});

const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { init } = require('./models/init');
const ChatService = require('./services/ChatService');

const chatService = new ChatService();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:8080'],
        credentials: true
    }
});

// Маршруты для HTTP
app.get('/', async (req, res) => {
    return res.send(123);
});

app.listen(3000, async () => {
    console.log('Server started');
    await init();
});

// Запуск сокет-сервера
io.on('connection', async (socket) => {
    // Получить и отправить историю
    socket.emit('history', {});

    // Комнаты
    socket.on('create_room', async data => {
        // Создать комнату в БД
        try {
            const room = await chatService(data);

            // Отправить список комнат
            socket.emit('rooms_list_changed', room);
        } catch (e) {
            console.error(e);
        }
    });
    socket.on('join_room', data => {
        // Получить историю комнаты
    });
    socket.on('leave-room', data => {
        socket.leave('room-' + data.room_id);
    });

    // Сообщения
    socket.on('message', data => {
        if (data.room_id) {
            io.to('room-' + data.room_id).emit('message', {
                name: data.name,
                message: data.message
            });
        } else {
            socket.broadcast.emit('message', {
                name: data.name,
                message: data.message
            });
        }
    });
});

httpServer.listen(3001);