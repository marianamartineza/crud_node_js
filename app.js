const express = require('express');

const app = express();

app.set('view engine','ejs');
const path = require('path');
require('dotenv').config();
const logger = require('morgan');
const fileupload = require('express-fileupload');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true,
    })
);

const { v4: uuid } = require('uuid');

const conexion = require('./database/db');

app.use(express.urlencoded({extended:false}));

app.use('/',require('./router'))

app.listen(5000,()=>{
    console.log('server conectado en http://localhost:5000')
})

app.post('/save-image', (req, res) => {

    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const demografia = req.body.demografia;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const photo = req.files.photo;
    const extension = photo.mimetype.split('/')[1];
    const validExtensions = ['png','jpg','jpeg','jfif'];

    if (!validExtensions.includes(extension)) {
        return res.status(400).send('Not valid file extension');
    }

    const photoPath = `/images/${uuid()}.${extension}`;
    const uploadPath = `${__dirname}/public${photoPath}`;

    conexion.query('INSERT INTO animes SET ?',{nombre:nombre,descripcion:descripcion,demografia:demografia,imagen:photoPath},(error,results)=>{
        if(error){
            console.log(error);
        }else{  
            photo.mv(uploadPath, function (err) {
                if (err) return res.status(500).send(err); 
                res.redirect("/")   
            });
        }
    })
});


app.post('/update-image', (req, res) => {

    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const demografia = req.body.demografia;
    const id = req.body.id;

    if (!req.files || Object.keys(req.files).length === 0) {
        // return res.status(400).send('No files were uploaded.');

        conexion.query('UPDATE animes SET ? WHERE id = ?',[{nombre:nombre,descripcion:descripcion,demografia:demografia}, id],(error,results)=>{
            if(error){
                console.log(error);
            }else{  
               res.redirect('/')
            }
        })

    }else{

            const photo = req.files.photo;
            const extension = photo.mimetype.split('/')[1];
            const validExtensions = ['png','jpg','jpeg','jfif'];

            if (!validExtensions.includes(extension)) {
                return res.status(400).send('Not valid file extension');
            }

            const photoPath = `/images/${uuid()}.${extension}`;
            const uploadPath = `${__dirname}/public${photoPath}`;

            photo.mv(uploadPath, function (err) {
                if (err) return res.status(500).send(err); 
            });

        
        conexion.query('UPDATE animes SET ? WHERE id = ?',[{nombre:nombre,descripcion:descripcion,demografia:demografia,imagen:photoPath}, id],(error,results)=>{
            if(error){
                console.log(error);
            }else{  
            res.redirect('/')
            }
        })


    }


});
