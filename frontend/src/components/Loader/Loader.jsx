import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { useSelector } from "react-redux";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader({ size, color }) {
  return (
    <div className="sweet-loading">
      <HashLoader
        color={color ? color : "#23c0e9"}
        loading={true}
        css={override}
        size={size ? size : 50}
      />
    </div>
  );
}
export default Loader;
