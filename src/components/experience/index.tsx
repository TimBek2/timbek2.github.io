import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import experiences from '../../constants';
import './style.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <VerticalTimeline lineColor={'#bb9af7'}>
        {experiences.map((experience, index:number) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element-work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={experience.date}
            iconStyle={{ boxShadow: "0 0 0 4px #bb9af7" }}
            icon={<img src={experience.icon} alt={`${experience.companyName} Logo`} className={`work-icon ${experience.iconClass}`} />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <div className="vertical-timeline-row row">
              <a className="vertical-timeline-element-subtitle" href={`${experience.companyLink}`} target="_blank">{experience.companyName}</a>
              <h5 className="vertical-timeline-element-location">{experience.location}</h5>
            </div>
            <ul>
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <p className="resume-link">
        If you want to see my full resume, <a
        href="../../assets/Tim_Beck_Resume_8-1-2025.pdf" download={true}>
          take a look!
        </a>
      </p>
    </section>
  );
}

export default Experience;