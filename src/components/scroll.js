import React,{useState, useEffect} from 'react'
import '../Css/App.css'

const ScrollBtn = () => {
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        const btnVisibility = () => {
            (window.pageYOffset > 300) ? setVisible(true) : setVisible(false)
        }

        window.addEventListener('scroll', btnVisibility)

        return () =>{
            window.removeEventListener('scroll',btnVisibility)
        };
    },[]);

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }

    return(
        <>
            <div className='ContainerBtnScroll'>
                <button className='btnScroll' onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </>
    )
}

export default ScrollBtn