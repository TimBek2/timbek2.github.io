import './style.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <h3 className="nav-title"><a className="nav-logo" href="#hero">TB</a></h3>
      <ul className='nav-links'>
        <li className='nav-link'><a href="#about">About Me</a></li>
        <li className='nav-link'><a href="#experience">Experience</a></li>
        <li className='nav-link'><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;