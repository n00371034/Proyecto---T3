const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        mensaje: 'Sistema de Gestion Academica funcionando',
        estado: 'Correcto',
        institucion: 'Innovatec Education'
    }));
});

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Servidor ejecutandose en puerto ${PORT}`);
    });
}

module.exports = server;