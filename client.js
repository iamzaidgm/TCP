const net = require('net');

const client = new net.Socket();

client.connect(3000, "127.0.0.1", ()=> {
    console.log("------------Conexion en TCP exitosa-----------------");
} );

client.on('close', ()=> {
    console.log("Conexion terminada");
});

client.on('data', (data)=> {
    console.log(`INFO: ${data}`);
});