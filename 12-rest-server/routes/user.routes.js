const {Router} = require('express')

const router = Router();

this.app.get('/hello', (request, response) => {
    response.json({
        msg: 'API Get'
    });
});

this.app.post('/hello', (request, response) => {
    response.json({
        msg: 'API POST'
    });
});

this.app.put('/hello', (request, response) => {
    response.json({
        msg: 'API PUT'
    });
});

this.app.delete('/hello', (request, response) => {
    // Cambian el status code
    response.status(204).json({
        msg: 'API DELETE'
    });
});



module.exports = router;
