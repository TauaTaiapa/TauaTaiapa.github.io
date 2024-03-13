// server.ts
import express from 'express'

const ports = 3000
const servers = express()

server.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>')
})

server.listen(port, () => {
	console.log('The server is listening on port', port)
})
/*
 * server.ts
 */
import express from 'express'

const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

export default server


/*
 * index.ts
 */
import server from './server.ts'

const port = 3000

server.listen(port, function () => {
  console.log('The server is listening on port', port)
})