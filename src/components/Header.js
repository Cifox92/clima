import React from 'react'


//Estamos usando materialize para el estilo. Fíjate en las clases! El CDN está en el index.html de la carpeta public.

const Header = ({titulo}) => {
    return (
        <nav>
            <div className='nav-wrapper light-blue darken-2'>
                <a href='#!' className='brand-logo'>{titulo}</a>
            </div>
        </nav>
    )
}
 
export default Header