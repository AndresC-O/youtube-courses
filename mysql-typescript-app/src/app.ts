import express, {Application} from 'express';
import morgan from 'morgan';

//Routes
import IndexRouter from './routes/index.routes'
import PostRouter from './routes/post.routes'

//this is the main
export class App{

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        //this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRouter)
        this.app.use('/post',PostRouter)
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ' + this.app.get('port'));
    }
}