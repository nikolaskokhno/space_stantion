import React from "react";
import UserImg from "../assets/img/user.png";

export default class People extends React.Component {

    state = {
        peoples: []
      }
    
      async fetchPeoples() {
        const url = "http://api.open-notify.org/astros.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({peoples: data.people});
      }
    
      async componentDidMount() {
        this.fetchPeoples()
        this.timer = setInterval(() => this.fetchPeoples(), 5000);
      }
    
      async componentWillUnmount() {
        this.timer = null;
      }

    render() {
        return(
            <div className="people">
                <ul>
                    {this.state.peoples.map((human) => (
                      <li>
                        <img src={UserImg} alt="people" />
                        {human.name}
                      </li>
                    ))}
                </ul>
                <div className="countPeople">
                  <p>Total amount: <span>{this.state.peoples.length}</span> people on ISS</p>
                </div>
            </div>
        );
    }
}