const express = require('express');
const cors = require('cors');

const app = express();

//config
app.set('port',5010)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())


//routes
app.use('/seller',require('./routes/route.seller'))
app.use('/book',require('./routes/route.book'))

app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`)
});

module.exports = app;