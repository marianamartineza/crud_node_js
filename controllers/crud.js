const conexion = require("../database/db")

exports.save = (req,res) => {
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    conexion.query('INSERT INTO usuarios SET ?',{nombre:nombre,rol:rol},(error,results)=>{
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
    const rol = req.body.rol;
    conexion.query('UPDATE usuarios SET ? WHERE id = ?',[{nombre:nombre, rol:rol}, id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}
