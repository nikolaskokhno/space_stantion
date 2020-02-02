import React from "react";
import moment from "moment";

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
                    <span>{moment().utc().format('h:mm:ss')}</span>
                </h5>
                <p>{moment().utc().format('dddd DD MMMM YYYY')}</p>
            </div>
        );
    }
}