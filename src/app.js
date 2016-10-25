let path = require('path')
let express = require('express')
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'

let config = require('./config/webpack.dev.config');

let app = express()

app.set ('views', path.join(process.cwd(), 'src', 'views'))

app.set ('view engine', 'jade')

let router = express.Router();

let compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))


router.get('/', (req, res, next) => res.render('index') )

app.use(router)

app.listen(3000, () => console.log('listening on 3000'))
