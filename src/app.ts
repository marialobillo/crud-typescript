import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';

// Routes
import indexRoutes from './routes';

class Application {
    
    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    settings(){
        this.app.set('port', 4040);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }

    middleware(){
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(indexRoutes);

        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running at port ', this.app.get('port'));
        });
    }
}

export default Application;