const mysql = require('mysql')

// demografia shoujo, seinen, josei, shounen, kodomo
// descripcion 
// imagen
// titulo

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'animes_db'
})

conexion.connect((error)=>{
    if(error){
        console.error("No se conecto a la BD, el error es:"+error)
    }else{
        console.log("Conectado a la BD")
    }
})

module.exports = conexion