import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import experiences from '../../constants';
import './style.css';

const Experience = () => {
  return (
    <section className="experience">
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
              <h4 className="vertical-timeline-element-subtitle">{experience.companyName}</h4>
              <h5 className="vertical-timeline-element-location">{experience.location}</h5>
            </div>
            <ul>
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element-work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'none', boxShadow: "0 0 0 4px #bb9af7" }}
          icon={<img src={hubbleContacts} className="work-icon" alt="Shift Lab Logo" />}
          iconClassName=""
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;