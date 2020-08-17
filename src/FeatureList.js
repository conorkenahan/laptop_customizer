import React from "react";
import slugify from "slugify";
import FeatureItems from "./FeatureItems";
import FeatureName from "./FeatureName";
import MainForm from "./MainForm";

class FeatureList extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, i) => {
      const featureHash = feature + "-" + i;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItems
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
        />
      );
    });
    return <MainForm features={features} />;
  }
}

export default FeatureList;
