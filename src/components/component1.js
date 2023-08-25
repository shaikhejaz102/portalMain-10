import { useCallback } from "react";
import "./component1.css";
const Component1 = ({ onClose }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Your Journey 2" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Your Team 1" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "survey 1" to the project
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Please sync "policy 1" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Resources" to the project
  }, []);

  const onGroupContainer6Click = useCallback(() => {
    // Please sync "Synergy" to the project
  }, []);

  return (
    <div className="component-1">
      <img
        className="memphis-mini-pattern"
        alt=""
        src="/memphis-mini-pattern@2x.png"
      />
      <div className="your-journey-parent" onClick={onGroupContainerClick}>
        <div className="your-journey">Your Journey</div>
        <img
          className="interface-essentialspace-shut-icon"
          alt=""
          src="/interface-essentialspaceshuttle.svg"
        />
      </div>
      <div className="profile-parent" onClick={onGroupContainer1Click}>
        <div className="profile">Profile</div>
        <img
          className="interface-essentialspace-shut-icon"
          alt=""
          src="/userperson.svg"
        />
      </div>
      <div className="your-team-parent" onClick={onGroupContainer2Click}>
        <div className="your-team">Your Team</div>
        <img
          className="interface-essentialspace-shut-icon"
          alt=""
          src="/usergroupperson.svg"
        />
      </div>
      <div className="survey-parent" onClick={onGroupContainer3Click}>
        <div className="profile">Survey</div>
        <img
          className="interface-essentialspace-shut-icon"
          alt=""
          src="/interface-essentialmenu4.svg"
        />
      </div>
      <div className="policies-parent" onClick={onGroupContainer4Click}>
        <div className="policies">Policies</div>
        <img
          className="interface-essentialspace-shut-icon"
          alt=""
          src="/interface-essentialclip-board.svg"
        />
      </div>
      <div className="resources-parent" onClick={onGroupContainer5Click}>
        <div className="profile">Resources</div>
        <img
          className="interface-essentialspace-shut-icon"
          alt=""
          src="/interface-essentialarchive.svg"
        />
      </div>
      <div
        className="interface-essentialinstant-parent"
        onClick={onGroupContainer6Click}
      >
        <img
          className="interface-essentialinstant-icon"
          alt=""
          src="/interface-essentialinstant.svg"
        />
        <div className="synergy">Synergy</div>
      </div>
    </div>
  );
};

export default Component1;
