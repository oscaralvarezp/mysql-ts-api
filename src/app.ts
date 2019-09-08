import express, { Application } from 'express';
import morgan from 'morgan';

import indexRoutes from './routes/index.routes';
import postRoutes from './routes/post.routes';

export class App {
    
    private app: Application;

    // private port: number | string: para usar esta variable en toda la clase
    constructor(private port: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(indexRoutes);
        this.app.use('/posts',postRoutes);
    }

    public async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port:', this.app.get('port'));
    }
}
