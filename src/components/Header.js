import React from 'react'
import PropTypes from 'prop-types'


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

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header