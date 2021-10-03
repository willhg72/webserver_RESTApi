
const express = require('express');
var cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usauriosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        //lectura y parseo de body
        this.app.use( express.json() );

        // directorio publico
        this.app.use(express.static('public'))


    }


    routes(){
        this.app.use(this.usauriosPath, require('../routes/usuarios')) 
             
     } 

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ',this.port);
        } );
    }

}

module.exports = Server;

