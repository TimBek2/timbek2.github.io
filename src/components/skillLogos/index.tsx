import Tilt from 'react-parallax-tilt';
import jsLogo from '../../assets/JavaScript-logo.svg';
import tsLogo from '../../assets/TypeScript-logo.svg';
import reactLogo from '../../assets/React-logo.svg';
import rubyLogo from '../../assets/Ruby-logo.svg';
import railsLogo from '../../assets/Rails-logo.svg';
import './style.css';

const SkillLogos = () => {
  const tiltSettings = {
    tiltMaxAngleX: 25,
    tiltMaxAngleY: 25,
    glareEnable: true,
    glareMaxOpacity: 0.5,
    glareColor: '#bb9af7',
    glarePosition: 'all' as const,
  }
  return (
    <div className="skill-logos row">
      <Tilt className="tilt" {...tiltSettings}>
        <img src={jsLogo} alt="JavaScript Logo" />
      </Tilt>
      <Tilt className="tilt" {...tiltSettings}>
        <img src={tsLogo} alt="TypeScript Logo" />
      </Tilt>
      <Tilt className="tilt" {...tiltSettings}>
        <img src={reactLogo} alt="React Logo" />
      </Tilt>
      <Tilt className="tilt" {...tiltSettings}>
        <img src={rubyLogo} alt="Ruby Logo" />
      </Tilt>
      <Tilt className="tilt rails-logo" {...tiltSettings}>
        <img src={railsLogo} alt="Rails Logo" />
      </Tilt>
    </div>
  );
};

export default SkillLogos;

