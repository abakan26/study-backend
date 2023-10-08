const http = require('http')

const server = http.createServer((request, response) => {
    let html;
    switch (request.url) {
        case '/home':
            html = '<html lang="ru"><head><title>Home</title></head><body>Home page</body></html>'
            break;
        default:
            html = ''
    }
    const start = new Date()
    setTimeout(() => {
        response.write(html)
        response.end()
    }, 3000)
    // new Promise((resolve) => {
    //     setTimeout(resolve, 10000)
    // }).then(() => {
    //
    // })

})
server.listen(3005)
