import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard.js";
import TopButton from "../../components/topButton/TopButton.js";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";
import "./Publications.css";
import PublicationsImg from "./PublicationsImg-v2";

class Publications extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="publications-main">
        <Header theme={theme} />

        {/* Hero / Heading */}
        {publications.data.length > 0 ? (
          <div className="basic-publications">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-img-div">
                  {/* replace with PublicationsImg if you create one */}
                  <PublicationsImg theme={theme} />
                </div>

                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>

                  <p
                    className="publications-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader.description}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        {/* Publications list */}
        <div className="publications-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard key={pub.id} pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Publications;
