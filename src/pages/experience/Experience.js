import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabels: false,
    };
    this.timelineRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
    this.handleScroll(); // initial check
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }

  handleScroll = () => {
    const timelineEl = this.timelineRef.current;
    if (!timelineEl) return;

    const rect = timelineEl.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const viewportMiddle = viewportHeight / 2;

    // Is the middle of the viewport inside the timeline area?
    const isInTimeline =
      rect.top < viewportMiddle && rect.bottom > viewportMiddle;

    if (isInTimeline !== this.state.showLabels) {
      this.setState({ showLabels: isInTimeline });
    }
  };

  render() {
    const theme = this.props.theme;
    const { showLabels } = this.state;

    return (
      <div className="experience-main">
        <Header theme={theme} />

        {/* Fixed labels that only appear when timeline is active */}
        <div
          className={
            "experience-country-label left-label" +
            (showLabels ? " visible" : "")
          }
          style={{ color: theme.text }}
        >
          Switzerland
        </div>
        <div
          className={
            "experience-country-label right-label" +
            (showLabels ? " visible" : "")
          }
          style={{ color: theme.text }}
        >
          Chile
        </div>

        {/* Hero / intro section */}
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Timeline wrapper we track for scroll position */}
        <div className="experience-timeline-wrapper" ref={this.timelineRef}>
          <ExperienceAccordion
            sections={experience["sections"]}
            theme={theme}
          />
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
