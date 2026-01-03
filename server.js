import http from 'http';
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 404;
    console.log(req.url);
    console.log(req.method);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>Internal Server Error</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});