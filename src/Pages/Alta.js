
const Alta = () => {
    return(
        <form className="row g-3">
            <div className="col-10"> 
    <label for="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="inputAddress" required/>
  </div>
  <div className="col-md-5">
    <label for="precio" className="form-label">Precio</label>
    <input type="number" className="form-control" id="inputEmail4" required/>
  </div>
  <div className="col-md-5">
    <label for="stock" className="form-label">Stock</label>
    <input type="number" className="form-control" id="inputPassword4" required/>
  </div>
  <div className="col-md-5">
    <label for="marca" className="form-label">Marca</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-5">
    <label for="categoria" className="form-label">Categoría</label>
    <input type="text" className="form-control" id="inputPassword4" required/>
  </div>
  <div className="col-md-10">
    <label for="descripcion-corta" className="form-label">Descripción corta</label>
    <input type="text" className="form-control" id="inputCity" required/>
  </div>
  <div className="col-md-10">
  <label for="descripcion-larga" class="form-label">Descripción larga</label>
  <textarea className="form-control" id="descripcion" rows="3" required></textarea>
  </div>
  <div className="col-10">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" required/>
      <label className="form-check-label" for="gridCheck">
        Envío sin costo
      </label>
    </div>
  </div>
  <div className="col-md-5">
    <label for="edad-desde" className="form-label">Edad desde</label>
    <input type="number" className="form-control" id="inputEmail4" required/>
  </div>
  <div className="col-md-5">
    <label for="edad-hasta" className="form-label">Edad hasta</label>
    <input type="number" className="form-control" id="inputPassword4" required/>
  </div>
  <div className="col-md-5">
  <label for="imagen" className="form-label">Selecciona una foto</label>
  <input class="form-control" type="file" id="formFile" required/>
</div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Enviar</button>
  </div>
</form>

    );
}

export default Alta;