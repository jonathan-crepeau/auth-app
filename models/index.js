const mongoose = require('mongoose');
const uri  = "mongodb+srv://jonathan-crepeau:my-password@authocluster0.zfoiawz.mongodb.net/authappdb?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Initial connection to DB successful..'))
    .catch((error) => console.log(error));

module.exports = {
    User: require('./User')
}