import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import shiftLab from '../../assets/shift-lab-logo.svg';
import hubbleContacts from '../../assets/hubble-logo.png';
import './style.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <VerticalTimeline lineColor={'#bb9af7'}>
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;