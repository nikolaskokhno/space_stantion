import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div className="mark">{text}</div>;

export default class Map extends React.Component {
    
    static defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 2
    };

    render() {
        return(
            <div className="map">
                <div style={{ height: '60vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAQwQmItqLvsS_1lJQ0O9WqmtuH8bcQ3zY' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={this.props.location.latitude}
                        lng={this.props.location.longitude}
                        text="Space station"
                    />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}