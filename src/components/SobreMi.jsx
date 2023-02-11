import '../Css/AboutMe.css'
const AboutMe = () => {
    return(
        <>
            <section className="AboutMe" id="sobreMi">
                <div className="containerAboutMe">
                    <div className="texto">
                        <h2 className='h2A'>
                            Sobre mi
                        </h2>
                        <p className='textoAbout'>
                            Empecé mi trayectoria profesional como Gestora Cultural hace más de 14 años. La llegada de la pandemia me llevó a volcar mi trabajo al mundo virtual. Durante estos últimos 2 años he trabajado como productora técnica de proyectos culturales que tuvieron que adaptarse a diversas plataformas y aplicaciones web.
                        </p>
                        <h5 className='h5'>
                            ACTUALMENTE ESTUDIO Y BUSCO AMPLIAR MI CAMPO LABORAL EN EL MUNDO DEL DESARROLLO WEB.
                        </h5>
                        <p className='textoAbout'>
                            Mira mi experiencia laboral en detalle en 
                            <a href=''>
                                LinkedIn
                            </a>.
                        </p>
                    </div>
                    <div className="containerImg">
                        <img className='imagenDev' src="/img/imagenDev.png" alt="dev" />
                    </div>
                </div>
            </section>
        <hr className="hr"/>
        </>
    )
}

export default AboutMe