import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import capri from '../../assets/tim_capri.jpeg';
import kananaskis from '../../assets/tim_kananaskis.jpeg';
import pensacola from '../../assets/tim_pensacola.jpeg';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import './style.css';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, watchDrag: false}, [Fade()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img className="slide-image" src={capri} alt="Me in Anacapri" />
          </div>
          <div className="embla__slide">
            <img className="slide-image" src={kananaskis} alt="Me in Canada near Banff" />
          </div>
          <div className="embla__slide">
            <img className="slide-image" src={pensacola} alt="Me in Pensacola on Blackwater Bay" />
          </div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <img src={leftArrow} alt="Previous slide" />
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <img src={rightArrow} alt="Next slide" />
      </button>
    </div>
  )
}

const About = () => {
  return (
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
        <EmblaCarousel />
      </div>
    </section>
  );
};

export default About;