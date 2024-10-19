

const Contacto = () => {
    return (
        <>
        <div className="col-6"> 
            <label for="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="inputAddress"/>
        </div>
        <div className="col-6"> 
            <label for="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="inputAddress"/>
        </div>
        <div className="col-md-6">
            <label for="comentarios" class="form-label">Comentarios</label>
            <textarea className="form-control" id="descripcion" rows="3"></textarea>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
        
    </>

    );
}

export default Contacto;