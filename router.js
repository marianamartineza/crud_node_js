const express = require('express')
const router = express.Router()

const conexion = require('./database/db')



router.get('/',(req,res)=>{
    conexion.query('SELECT * from animes',(error,results)=>{
        if(error){
            throw error
        }else{
            res.render('index',{results:results})
        }
    })
})

router.get('/create',(req,res) => {
    res.render('create')
})

router.get('/edit/:id',(req,res) => {
    const id = req.params.id;
    conexion.query('SELECT * from animes WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error
        }else{
            res.render('edit',{anime: results[0]});
        }
    })
})

const crud = require('./controllers/crud')

router.post('/save',crud.save);

router.post('/update',crud.update);

router.get('/delete/:id',(req,res) => {
    const id = req.params.id; 
    conexion.query('DELETE FROM animes WHERE id = ?',[id],(error,results) => {
        if(error){
            throw error
        }else{
            res.redirect('/')
        }
    });
})

module.exports = router;