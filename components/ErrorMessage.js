import React from "react";

// style
import styles from "../styles/errorMessage.module.scss";

function ErrorMessage({ visible, error }) {
  if (!visible || !error) return null;

  return <div className={styles.container}>{error}</div>;
}

export default ErrorMessage;
