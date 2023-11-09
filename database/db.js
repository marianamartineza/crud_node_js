const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_js_db'
})

conexion.connect((error)=>{
    if(error){
        console.error("No se conecto a la BD, el error es:"+error)
    }else{
        console.log("Conectado a la BD")
    }
})

module.exports = conexion