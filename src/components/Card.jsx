import React from "react";

export function Card({ image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="gameImage" />;
    </div>
  );
}
