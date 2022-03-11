const dotenv = require( 'dotenv' ).config()
const express = require( 'express' )
const colors = require( 'colors' )
const {errorHandler} = require( './middleware/errorMiddleware' )
const connectDB = require( './config/db' )
const path = require( 'path' );
const port = process.env.PORT || 5000

connectDB()
const app = express()

// Uncomment for the static build
// app.use( express.static( path.join( __dirname, '/src/build' ) ) )

app.use( express.json() )
app.use( express.urlencoded( {extended: false} ) )

app.use( '/api/articles', require( './routes/articleRoutes' ) )

app.use( errorHandler )

// Uncomment for the static build
/*app.get( '*', ( req, res ) => {
  res.sendFile( path.join( __dirname + '/src/build/index.html' ) )
} )*/

app.listen( port, () => console.log( `Server started on port ${port}!` ) )
