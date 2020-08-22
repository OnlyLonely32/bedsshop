import React from "react";
import ContentLoader from "react-content-loader"

const Loading = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={477}
      viewBox="0 0 280 477"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="144" cy="140" r="120" />
      <rect x="0" y="282" rx="5" ry="5" width="280" height="24" />
      <rect x="0" y="326" rx="5" ry="5" width="280" height="72" />
      <rect x="165" y="373" rx="0" ry="0" width="1" height="0" />
      <rect x="141" y="425" rx="20" ry="20" width="140" height="44" />
      <rect x="0" y="432" rx="13" ry="13" width="88" height="27" />
    </ContentLoader>
  )
}

export default Loading;