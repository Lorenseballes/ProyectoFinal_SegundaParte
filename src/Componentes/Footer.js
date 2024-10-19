import Estilo from '../CSS/footer.css';
import LogoF from '../image/logo.png';
import Facebook from '../image/fb..png';
import Instagram from '../image/ig.png';
import Tiktok from '../image/Tiktok.png';


const Footer = () => {
    return (
        <div className="container">
        <footer>
        <div class="logoDos">
                <img src={LogoF} alt="logo"/>
        </div> 
        <div class="datos">
            <h4>Dirección: Av. Brasil 2025 <br/>
                Tel. 29367808 <br/>
                Whatsapp: 096536789
            </h4>
        </div>
        <hr/>
    <h5>Redes Sociales</h5>
    <div class="redes">
        <img src={Instagram} alt="Instagram"/>
        <img src={Facebook} alt="Facebook"/>
        <img src={Tiktok} alt="TikTok"/>
    </div>
    <hr/>
    <div class="textoFinal">
        <p>Derechos reservados MEGAFIT</p>
    </div>
    </footer>
    </div>
    );
}

export default Footer;