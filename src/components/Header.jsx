import '../Css/Header.css'

const Header = () => {
    return (
        <>
            <main className="encabezado">
                <div className="divEncabezado">
                <img className="imagenMia" src="/img/bachi.png"/>
                    <div className="containerEncabezado">
                        <h4 className='h4'>
                            Hi!, I'm 
                        </h4>
                        <h1 className='h1'>
                            Lorenzo Noguera Martínez
                        </h1>
                        <h4 className='h4'>
                            y construyo paginas web.😁
                        </h4>
                        <h4 className='h4'>
                            Aqui les voy a contar un poco sobre mi.
                        </h4>
                        <ul className="linksEncabezado">
                            <li>
                                <a href="">
                                    <i className="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-behance"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="descarga">
                            <button className='btnCv'>
                                Descarga mi cv
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <hr className='hr'/>
        </>

    )
}

export default Header