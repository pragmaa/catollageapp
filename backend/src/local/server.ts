import http from 'http'
const HOST: string = process.env.HOST || '127.0.0.1'
const PORT: string|number = process.env.PORT || 3000

const server = http.createServer((req: any, res: any) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})

server.listen(PORT, (): void => {
    console.log(`Server running at port ${PORT} and host ${HOST}`)
})

