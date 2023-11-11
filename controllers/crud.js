const conexion = require("../database/db")

const { v4: uuid } = require('uuid');

exports.save = (req,res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const demografia = req.body.demografia;
    const imagen = req.body.imagen ? req.body.imagen : null;

    conexion.query('INSERT INTO animes SET ?',{nombre:nombre,descripcion:descripcion,demografia:demografia,imagen:imagen},(error,results)=>{
        if(error){
            console.log(error);
        }else{  
            res.redirect('/');
        }
    })
}

exports.update = (req,res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const imagen = req.body.imagen;
    const demografia = req.body.demografia;
    conexion.query('UPDATE animes SET ? WHERE id = ?',[{nombre:nombre,descripcion:descripcion,demografia:demografia,imagen:imagen}, id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}
