import React from "react";

// style
import styles from "../styles/loading.module.scss";

function Loading({ loading = false }) {
  if (!loading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.loading} />
    </div>
  );
}

export default Loading;
