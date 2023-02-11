import '../Css/NavBar.css'
import React from 'react'

const NavBar = () =>{

    return(
            <nav className='menu'>
                <ul className="listaMenu">
                    <li className="listaMenuItem">
                        <a href="#sobreMi" id='botonScroll'>
                           About me 
                        </a>
                    </li>
                    <li className="listaMenuItem">
                        <a href="#portfolio" id='botonScroll'>
                           Portfolio 
                        </a>
                    </li>
                    <li className="listaMenuItem">
                        <a href="#skills" id='botonScroll'>
                            Skills
                        </a>
                    </li>
                    <li className="listaMenuItem">
                        <a href="#formacion" id='botonScroll'>
                           Education 
                        </a>
                    </li>
                    <li className="listaMenuItem">
                        <a href="#contacto" id='botonScroll'>
                           Contact 
                        </a>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar