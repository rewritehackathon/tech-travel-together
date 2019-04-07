import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelData: {
        
      }
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    fetch("/users/getUsers")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          travelData: json
        });
      });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="user">
        <h1>Pink Panthers</h1>
      </div>
    );
  }
}

export default User;
