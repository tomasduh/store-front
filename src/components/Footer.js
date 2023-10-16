import '../styles/Footer.css'

function Footer(){
    return(
        <div>
            <footer className="footer">
            <section className="info">
                <ul className="contact-info">
                    <li>
                        <h6 className="footer-title"><b>CONTACTO</b></h6>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <b>Bucaramanga, Santander</b>
                    </li>
                    <li>
                        <span></span>
                        <span>Calle 65 # 18 - 51</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        302 3950478
                    </li>
                    <li className="mb-4">
                        <i className="fa-solid fa-envelope"></i>
                        tjduarte@uts.edu.co
                    </li>
                    <li>
                        <i class="fa-solid fa-clock"></i>
                        Lun - Vie: 07:00 am / 05:00 pm
                    </li>
                    <li>
                        <span></span>
                        S b: 07:00 am / 12:00 m
                    </li>
                </ul>
                <section className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2109986884416!2d-73.1171882!3d7.1015273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fc0b4d4deab%3A0x30a49b197b48c754!2sCl.%2065%20%231851%2C%20La%20Victoria%2C%20Bucaramanga%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1695565568231!5m2!1ses-419!2sco"
                        width="100%" height="100%" allowfullscreen loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Mapa de Bucaramanga, Santander"></iframe>
                </section>
                <article className="social-media">
                    <h6 className="footer-title"><b>REDES SOCIALES</b></h6>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/interracafe/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-facebook"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-twitter"></i>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="rights">
                <span>  2023 Agroindustrias de Colombia. Todos los
                    derechos reservados.</span>
            </section>
        </footer>
        </div>
    )

}

export default Footer;