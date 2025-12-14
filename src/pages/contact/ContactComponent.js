import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// ❌ removed AddressImg import
// import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { trackOutboundClick } from "../../utils/analytics"; // ⬅️ added

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          {/* === PROFILE / CONTACT TEXT === */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  style={{
                    width: "300px",
                    height: "400px",
                    borderRadius: "10%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Jose Contreras"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div
                  className="resume-btn-div"
                  style={{ display: "flex", gap: "10px" }}
                >
                  {/* CV BUTTON */}
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                    onClick={() =>
                      trackOutboundClick({
                        label: "CV PDF",
                        url: greeting.resumeLink,
                      })
                    }
                  />

                  {/* EMAIL ME BUTTON */}
                  <Button
                    text="Email Me"
                    newTab={false}
                    href="mailto:joseiraggio@gmail.com?subject=Contact%20from%20your%20portfolio%20website"
                    theme={theme}
                    onClick={() =>
                      trackOutboundClick({
                        label: "Email",
                        url: "mailto:joseiraggio@gmail.com",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* === ADDRESS / PHONE (SIDE BY SIDE) === */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              {/* left: PHONE */}
              <div className="address-column">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
              </div>

              {/* right: ADDRESS */}
              <div className="address-column">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* === GOOGLE CALENDAR APPOINTMENT SCHEDULING === */}
          <Fade bottom duration={1000} distance="40px">
            <div className="calendar-heading-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text, textAlign: "center" }}
              >
                Schedule a Meeting
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{
                  color: theme.secondaryText,
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Pick a time that works best for you directly in my calendar.
              </p>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3JTdHiG5L4tiKRhEv0-KxoYz6A8Ozk_VXvYvqrf7dRCKLir4vtoLJrYzNOHtKj6BQyvag2gRyM?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="1050"
                frameBorder="0"
                title="Book an appointment with José"
              />
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
