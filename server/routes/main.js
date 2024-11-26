const express = require('express');
const router = express.Router();

//Routes
//Creas una ruta basica, Cuando un usuario accede a esta ruta, el servidor responde con el mensaje "Hello World"
router.get('', (req,res) =>{
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb"        
    }
    
    
    res.render('index', {locals});
});

router.get('/about', (req,res) =>{
    res.render('about');
});

module.exports = router;