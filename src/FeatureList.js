import React from "react";
import slugify from "slugify";
import FeatureItems from "./FeatureItems";
import FeatureName from "./FeatureName";
import MainForm from "./MainForm";

import FEATURES from "./FEATURES";

class FeatureList extends React.Component {
  render() {
    const features = Object.keys(FEATURES).map((feature, i) => {
      const featureHash = feature + "-" + i;
      const options = FEATURES[feature].map((item, index) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItems
            key={`featureItem-${index}`}
            itemHash={itemHash}
            feature={feature}
            item={item}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        );
      });
      return (
        <FeatureName
          featureHash={featureHash}
          feature={feature}
          options={options}
          key={i}
        />
      );
    });
    return <MainForm features={features} />;
  }
}

export default FeatureList;
