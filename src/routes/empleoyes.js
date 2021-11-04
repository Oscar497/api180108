const express = require('express');
const router= express.Router();
const mysqlConnection = require('../database');
const queryProductos = require("./query");

router.get('/', (req, res)=>{
    mysqlConnection.query('select * from empleados',(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            consoles.log(err);
        }
    })

  
})
router.get('/:id', (req, res)=>{
    mysqlConnection.query('select * from empleados where id =?',[req.params.id],(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            consoles.log(err);
        }
    })

  
})
router.delete('/:id', (req, res)=>{
    mysqlConnection.query('delete from empleados where id =?',[req.params.id],(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            consoles.log(err);
        }
    })

  
})
/*router.post('/', (req, res)=>{
    let emp = req.body;
    var sql='set @nombre=?;set @salario=?; \
    call insertEmpleado(@nombre,@salario);'
    mysqlConnection.query(sql,[emp.nombre, emp.salario],(err,rows, fields)=>{
        if(!err){
           rows.forEach(element => {
               if(element.constructor==Array)
               res.send('Inserta empleado id:'+element[0].id)
            });
        }else{
            consoles.log(err);
        }
    })

  
})*/

router.post('/', (req, res)=>{
    const {id, nombre,salario}= req.body;
    const query= 'call InsertUpdate(?,?,?);';
    mysqlConnection.query(query,[id,nombre,salario],(err,rows, fields)=>{
        if(!err){
          res.json({Status:'Guardado'})
        }else{
            consoles.log(err);
        }
    })

  
})



router.put('/:id', (req, res)=>{
    const {nombre, salario} = req.body;
    const {id} = req.params;
   const query = 'call updateEmpleado(?,?,?)';
    mysqlConnection.query(query,[id,nombre,salario],(err,rows, fields)=>{
        if(!err){
           res.json({status:'Empleado actualizado'});
        }else{
            consoles.log(err);
        }
    })

  
})
module.exports= router;

