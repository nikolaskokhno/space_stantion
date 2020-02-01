import React from "react";

export default class UTCtime extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return(
            <div className="utc-time">
                <h5>
                    Current UTC time:&nbsp;   
                    {this.state.date.getUTCHours()}:
                    {this.state.date.getUTCMinutes()}:
                    {this.state.date.getUTCSeconds()}
                </h5>
                <p>{this.state.date.getUTCMonth()}</p>
            </div>
        );
    }
}