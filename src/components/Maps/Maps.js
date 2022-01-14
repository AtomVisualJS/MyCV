import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.2,
      lng: 0.633333,
    },
    zoom: 6,
  };
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAFBkgSf3znrZv5XGJj6Ddd3n3lHpCl4CY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={44.65522669919258} lng={0.5869790923156062} text="📍 Adress" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
