import React from 'react';
import Location from "./components/Location";
import UTStime from "./components/UTStime";

class App extends React.Component {

  state = {
    location: []
  }

  async fetchLocation() {
    const url = "http://api.open-notify.org/iss-now.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({location: data.iss_position});
  }

  async componentDidMount() {
    this.fetchLocation()
    this.timer = setInterval(() => this.fetchLocation(), 5000);
  }

  async componentWillUnmount() {
    this.timer = null;
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Location location={this.state.location} />
            </div>
            <div className="col-md-4">
              <UTStime />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
