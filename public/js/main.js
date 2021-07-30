const socket = io('/')

socket.on('connect', () => {
  console.log('Successfully connected to wss server');
})
