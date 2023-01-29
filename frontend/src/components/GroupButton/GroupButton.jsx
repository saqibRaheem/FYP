import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./GroupButton.scss";
import Container from "../Container/Container";

const GroupButtons = () => {
  const [toggle, settoggle] = useState(true);

  const togglebtn = () => {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  };
  return (
    <Container>
      <div className={`${"grpbtn-main"}`}>
        <div className={`${"grpbtn"}`}>
          <Button
            text="Latest Job"
            className={toggle ? `${"btns btn"}` : null}
            onClick={() => togglebtn()}
          />
          <Button
            text="Recent Job"
            className={!toggle ? `${"btns btn"}` : null}
            onClick={() => togglebtn()}
          />
        </div>
      </div>
    </Container>
  );
};
export default GroupButtons;
