import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import InitRoutes from './routes/index.js'

global.app = express()
global.app.use(compression())
global.app.use(morgan('tiny'))
global.app.set('case sensitive routing', false);
global.app.get('/')

const port = 8000;

global.app.listen(port, () => {
    console.log(`Started at ${port}`);
})

InitRoutes()
