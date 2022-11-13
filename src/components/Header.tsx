import React from 'react'
import {
  Link
} from "react-router-dom";
import '../style/header.scss'
interface IProps {
  appName: string;
}

const rightTabNav = () => {
  return (
    <ul className='wrap-header__right'>
      <Link to="/" className='wrap-header__items'>Home</Link>
      <Link to="/login" className='wrap-header__items'>Sign In</Link>
      <Link to="/signup" className='wrap-header__items'>Sign Up</Link>
    </ul>
  )
}
const Header:React.FC<IProps> = ({ appName }) => {
  return (
    <nav className='wrap-header container'>
      <Link to="/" className='wrap-header__logo-icon'>
        { appName }
      </Link>
      { rightTabNav() }
    </nav>
  )
}
export default Header;