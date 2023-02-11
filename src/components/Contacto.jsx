import '../Css/Contact.css'

const Contact = () => {
    return (
        <>
            <section className="contacto" id="contacto">
                    <div className="Contact">
                        <h2 className='h2A'>
                            Contactame!
                        </h2>
                        <div className="contactos">
                            <span className='spanContact'>
                                Email: 
                                <a href="" className='linkContact'>
                                    lnogueramartinez01@gmail.com
                                </a> 
                            </span>
                            <span className='spanContact'>
                                WhatsApp:
                                <a href="" className='linkContact'>
                                    +54 381 679-4802
                                </a> 
                            </span>
                            <span className='spanContact'>
                                Linkedin: 
                                <a href="" className='linkContact'>
                                    lorenzonoguera
                                </a> 
                            </span>
                        </div>
                    </div>
                    <div className="containerImgContact">
                        <img className='imgContact' src="/img/contact.png" alt="dev" />
                    </div>
            </section>
        </>
    )
}

export default Contact