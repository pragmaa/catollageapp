"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT} and host ${HOST}`);
});
//# sourceMappingURL=server.js.map