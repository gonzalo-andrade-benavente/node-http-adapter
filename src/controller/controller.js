const url = process.env.READ_SERVICE || 'localhost:8081';

exports.getDataById = (req, res) => {

    console.log(url);
    res.send('Hola mundo');
}