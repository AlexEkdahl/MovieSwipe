// import { Server as socketIO } from 'socket.io'
// import { createServer } from 'http'
// import { io, initialize } from './websocket.js'
// let io = null

// export const io = () => {
//   return io
// }

// export const initialize = (server) => {
//   if (io) return
//   io = new socketIO(server)
//   return io
// }
// //make one reference to event name so it can be easily renamed
// const chatEvent = 'chatMessage'

// //When a client connects, bind each desired event to the client socket
// io.on('connection', (socket) => {
//   io.emit(chatEvent, clientConnectedMsg)
//   console.log('USER CONNECTED')

//   //track disconnected clients via log
//   socket.on('disconnect', () => {
//     console.log('Disconnect')
//   })

//   //multicast received message from client
//   socket.on(chatEvent, (msg) => {
//     const combinedMsg = socket.id.substring(0, 4) + ': ' + msg
//     io.emit(chatEvent, combinedMsg)
//     console.log('multicast: ' + combinedMsg)
//   })
// })

//     server.listen(8001, () => {
//       console.log('WEBSOCKET ON: 8001')
//     })
