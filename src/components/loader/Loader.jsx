import React from "react";
import styles from "./Loader.module.scss";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ inline }) => {
  if (inline) {
    return (
      <div className={styles.inlineWrapper}>
        <RotatingLines
          visible={true}
          width="40"
          strokeWidth="5"
          strokeColor="grey"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <RotatingLines
          visible={true}
          width="40"
          strokeWidth="5"
          strokeColor="grey"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  );
};

export default Loader;
