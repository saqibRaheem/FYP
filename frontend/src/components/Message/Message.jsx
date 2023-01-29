import React from "react";
import "./Message.scss";
import Container from "../Container/Container";
import faderal from "../../assests/faderallogo.png";

const Message = () => {
  return (
    <Container>
      <div className={`${"main-message"}`}>
        <div className={`${"wpb_wrapper"}`}>
          <h3>Message</h3>
        </div>
        <div className={`${"message_content"}`}>
          <div className={`${"message_img"}`}>
            <img src={faderal} alt="chairman" />
          </div>
          <p>
            <span className={`${"message display"}`}>
              The Recruitment System establishment is based on the vision “To be a center of
              excellence of international standard and repute and to produce
              leaders with outstanding qualities of creativity and innovation.”
              Our diligent pursuit has always remained aligned with the noble
              mission of the institute. All the academic functions and research
              activities are devised based on the prevalent rules and
              regulations promulgated by the Federal Government Higher Education
              Department and the Higher Education Commission of Pakistan.
            </span>
            <span className={`${"role-mob"}`}>
              <span className={`${"message"}`}>--Mr. Ahmer Ali</span>
              <span className={`${"role"}`}>(Recruitment System)</span>
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Message;
