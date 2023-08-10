const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('Hii');
})


app.listen(8080, () => {
    console.log('server running on 8080 ')
});

