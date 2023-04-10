const http = require('http')
const app = require('./server')

const port =  process.env.PORT  || 5000

const server = http.createServer(app);

server.listen(port)



