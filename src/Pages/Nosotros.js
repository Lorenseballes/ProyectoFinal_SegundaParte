import Imagen1 from '../image/imagen1.jpg';
import Imagen2 from '../image/imagen2.jpg';
import Imagen3 from '../image/imagen3.jpg';


const Nosotros = () => {
    return(
        <>
        <div className="row featurette">
        <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">
        <img src={Imagen1} width="550" height="450" alt='imagen'/>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
        <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div className="col-md-5 order-md-1">
        <img src={Imagen2} width="550" height="450" alt='imagen'/>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
        <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        </div>
        <div className="col-md-5">
        <img src={Imagen3} width="550" height="450" alt='imagen'/>
        </div>
    </div>
    <hr className="featurette-divider"/>
        </>
        

    );
}

export default Nosotros;
