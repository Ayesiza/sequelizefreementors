import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import exphbs from 'express-handlebars'
import path from 'path'
import {db} from './config/database'
import apiRouters from './routers/apiRouters'



// app.use('/api/v1/', apiRouters)

    db.authenticate()
    .then(() => console.log('database connected...')
    )
    .catch(err => console.log('Error: ' +Error));


const app = express();
app.use(express.json());

app.use('/api/v1/', apiRouters)

// middlewares
// app.all('*', function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Max-Age", "3600");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
//     next();
// });

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '50mb','extended': 'true'}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


// apiRouters


const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`listening on port ${PORT}`));

export default app;