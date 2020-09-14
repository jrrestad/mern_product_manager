const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("Connection to DB established"))
.catch( err => console.log("Something went wrong when connecting to the DB: ", err))