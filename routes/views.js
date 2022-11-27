db = require('../models');
const ROOT = `${__dirname}/..`;



const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: ROOT
    });
};

module.exports = {
    root
}