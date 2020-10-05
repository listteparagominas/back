import express from 'express';
import mogoose from 'mongoose';
import routes from './routes';

class App{
    constructor(){
        this.server = express();

        mogoose.connect('mongodb+srv://devhousenode:devhousenode@devhousenode.2cmv4.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;