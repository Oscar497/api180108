const {Router} = require('express');
const Productos = require('./empleoyes')

const router = Router();

router.get('/empleados', Productos.getProductos);
router.post('/empleados', Productos.createNewProduct);
router.get('/empleados/:id',Productos.getProductosById);
router.delete('/empleados/:id', Productos.deleteProductoById);


module.exports =  router; 