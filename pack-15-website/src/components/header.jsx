import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div id='main-navigation' className='justify-content-center'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/whatwedo'>What We Do</Link>
          </li>
          <li>
            <Link to='/calendar'>Pack Calendar</Link>
          </li>
          <li>
            <Link to='/cubnotes'>Cub Notes</Link>
          </li>
          <li>
            <Link to='/resources'>Resources</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* <div id='site-name-row' className='row'>
        <span id='site-name'>
          <img src='images/cs_logo.webp' alt='Cub Scouts' />
        </span>
  </div> */}
    </>
  );
}

export default Header;
