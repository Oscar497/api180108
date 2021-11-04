const getAllProductos = "select * from empleados";
const addNewProduct =
  "insert into  cPROD_Productos (cPROD_Nombre, cPROD_Descripcion, cPROD_Cantidad) values (@cPROD_Nombre, @cPROD_Descripcion, @cPROD_Cantidad )";
const getAllProductosById =
  "select * from cPROD_Productos where cPROD_Id = @cPROD_Id";
const deleteProducto = "delete from cPROD_Productos where cPROD_Id = @cPROD_Id";
const getTotalProductos = "select count(*) from cPROD_Productos";

const updateProductosById = "exec sPU_updateProducto  @cPROD_Id,  @cPROD_Nombre, @cPROD_Descripcion, @cPROD_Cantidad ";

//const updateProductosById =
  //"Update cPROD_Productos SET cPROD_Nombre = @cPROD_Nombre, cPROD_Descripcion = @cPROD_Descripcion, cPROD_Cantidad = @cPROD_Cantidad WHERE  cPROD_Id = @cPROD_Id";

module.exports.getTotalProductos = getTotalProductos;
module.exports.getAllProductos = getAllProductos;
module.exports.addNewProduct = addNewProduct;
module.exports.getAllProductosById = getAllProductosById;
module.exports.deleteProducto = deleteProducto;
module.exports.updateProductosById = updateProductosById;
