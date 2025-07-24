import Flickity from 'react-flickity-component'
import './flickity.css'
import './style.css';

const About = () => {
  const flickityOptions = {
    initialIndex: 0,
    draggable: false,
    pageDots: false,
    wrapAround: true,
    contain: true,
    fade: true,
  }
  return (
    <>
      <section className="about">
        <div className='about-content'>
          <h2>About Me</h2>
          <p>
            Hi, I'm Tim. I'm a software engineer living in Brooklyn.
          </p>
          <p>
            I love building things, most of the time with Javascript & Node, Ruby on Rails or wood.
            I have a passion for creating user-facing applications that are both functional and visually appealing. I've worked extensively with ecommerce platforms and analytics, and am always looking for new challenges to further develop my skills.
          </p>
          <p>
            I'm always looking to work somewhere that values high quality code equally with collaboration and continuing education and development of its employees. I love working on challenging problems that require creative solutions, and I think that we do our best work when we collaborate with others and share our knowledge. Siloing information is a problem that only compounds over time.
          </p>
          <p>
            I've also built a few cutting boards and a coffee table, with some more ideas that are probably too ambitious.
          </p>
        </div>
        <div className='about-image'>
          <Flickity
            className={'flickity-carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded
            reloadOnUpdate
            static
          >
            <img src="https://placehold.co/600x400" alt="Tim Beck" />
            <img src="https://placehold.co/600x400" alt="Tim Beck" />
            <img src="https://placehold.co/600x400" alt="Tim Beck" />
          </Flickity>
        </div>
      </section>
    </>
  );
};

export default About;