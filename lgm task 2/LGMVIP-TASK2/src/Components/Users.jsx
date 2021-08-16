import React, { Component } from "react";
import "./Users.css";
import Cards from "./Cards";
class Users extends Component {
  state = {
    users: [],
    loading: false,
  };

  handleClick = (event) => {
    this.setState({ loading: true });
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const user = await response.json();
      console.log(user);
      setTimeout(() => {
        this.setState({ users: user.data, loading: false });
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-default mb-5">
          <a className="navbar-brand ml-5 text-white">Designsy</a>
          <div className="d-flex ml-auto header-nav">
            <button
              onClick={this.handleClick}
              type="button"
              className="btn btn-dark mr-5 button"
            >
              Get Users
            </button>
          </div>
        </nav>
        {this.state.loading === true && (
          <div class="loader-position">
            <div className="loader"></div>
          </div>
        )}
        {this.state.users !== [] && (
          <div className="row card-display ml-5 mr-5">
            {this.state.users.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 mr-3 ml-3 mt-5  mb-5 ">
                  <Cards key={item} data={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Users;
