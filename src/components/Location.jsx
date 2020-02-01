import React from "react";

export default class Location extends React.Component {

    render() {
        return(
            <div className="location">
                <h5>ISS is now located at:</h5>
                <p>
                    longitude: <span>{this.props.location.longitude}</span>, 
                    latitude: <span>{this.props.location.latitude}</span>
                </p>
            </div>
        );
    }
}