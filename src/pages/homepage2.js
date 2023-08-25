import { useState, useCallback } from "react";
import Component1 from "../components/component1";
import PortalPopup from "../components/portal-popup";
import "./homepage2.css";
const Homepage2 = () => {
  const [isComponent1Open, setComponent1Open] = useState(false);

  const onInterfaceEssentialHomeIconClick = useCallback(() => {
    // Please sync "Double Bubble Outline Pattern" to the project
  }, []);

  const openComponent1 = useCallback(() => {
    setComponent1Open(true);
  }, []);

  const closeComponent1 = useCallback(() => {
    setComponent1Open(false);
  }, []);

  return (
    <>
      <div className="homepage-2">
        <b className="your-journey-map">Your journey map</b>
        <div className="welcome-to-titan">
          Welcome to Titan: Your Onboarding Journey Begins!
        </div>
        <div className="component-28">
          <div className="component-28-child" />
          <img
            className="interface-essentialhome-icon"
            alt=""
            src="/interface-essentialhome.svg"
            onClick={onInterfaceEssentialHomeIconClick}
          />
          <div className="menu-parent" onClick={openComponent1}>
            <div className="menu">Menu</div>
            <img className="group-child" alt="" src="/vector-10.svg" />
          </div>
        </div>
        <div className="group-parent">
          <div className="map-01-1-parent">
            <img className="map-01-1-icon" alt="" src="/map01-1@2x.png" />
            <img className="frame-icon" alt="" src="/frame.svg" />
            <img className="frame-icon1" alt="" src="/frame.svg" />
            <img className="frame-icon2" alt="" src="/frame.svg" />
            <img className="frame-icon3" alt="" src="/frame1.svg" />
            <img className="frame-icon4" alt="" src="/frame2.svg" />
            <img className="frame-icon5" alt="" src="/frame3.svg" />
            <img className="frame-icon6" alt="" src="/frame4.svg" />
            <div className="ellipse-parent">
              <div className="group-item" />
              <b className="b">1</b>
            </div>
            <div className="ellipse-group">
              <div className="group-item" />
              <b className="b">2</b>
            </div>
            <div className="ellipse-container">
              <div className="group-item" />
              <b className="b">3</b>
            </div>
            <div className="group-div">
              <div className="group-item" />
              <b className="b">4</b>
            </div>
          </div>
          <div className="ellipse-parent1">
            <div className="group-item" />
            <b className="b">5</b>
          </div>
          <div className="ellipse-parent2">
            <div className="group-item" />
            <b className="b">7</b>
          </div>
          <div className="ellipse-parent3">
            <div className="group-item" />
            <b className="b">6</b>
          </div>
        </div>
        <div className="homepage-2-child" />
      </div>
      {isComponent1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeComponent1}
        >
          <Component1 onClose={closeComponent1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage2;
