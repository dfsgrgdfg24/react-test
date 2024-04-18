import React from 'react'
import './Header.css'
import{Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
          <div className='conteiner'>
            <Link to='/'  className='Header_link_item' ><img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIValOF75MCZ79huzbRgvrEUKPprDAhVTDc-iuNKC2uqfJDaOaNXRX7TtDHO47vBFfV8&usqp=CAU' /></Link>
             <form className='for_search'>
              <input className='place_for_search' type='text' value="" placeholder='Search' autoFocus/>
              <input className='button_for_search' type='submit' value=" " title='начать поиск'/>
             </form>
            <div className='Header_link'>
            <Link to='about' className='Header_link_item'>About</Link>
            <Link to='mans' className='Header_link_item'>Mans</Link>
            <Link to='womans' className='Header_link_item'>Womans</Link>
            <Link to='contakts' className='Header_link_item'> <img className='logo-contac' src='https://w7.pngwing.com/pngs/1007/571/png-transparent-telephone-call-mobile-phones-computer-icons-android-telephone-call-hand-logo.png'/> Contacts</Link>
            </div>
          </div>
    </div>
  )
}

export default Header
