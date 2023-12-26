import continueBtnStyles from "../styles/continueBtn.module.css";
import { Fragment } from "react";

export default function ContinueBtn() {
  return (
    <Fragment>
      <button className={continueBtnStyles.continueBtn}>Continue</button>
    </Fragment>
  );
}
