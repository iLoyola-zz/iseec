var express = require( 'express' );
var port = 8080;
var app = express();

app.set( 'port', port );

app.use( express.static( './' ) );

app.get( '/', function( req, res ) {
  res.render( 'index', {} );
});

app.listen( port, function() {
  console.log( 'App is running at localhost:' + port );
});