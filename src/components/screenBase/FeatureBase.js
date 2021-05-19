import React from "react";

function FeatureBase({ title, content, icon }) {
  return (
    <div>
      <p>{icon}</p>
      <h3 className="feature-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default FeatureBase;
