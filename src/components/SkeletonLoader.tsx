import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-card skeleton-card--main">
        <div className="skeleton-shimmer"></div>
      </div>
      <div className="skeleton-card skeleton-card--back">
        <div className="skeleton-shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
