const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Student Management System</h1>
        <p>Student Portal</p>
    `);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});