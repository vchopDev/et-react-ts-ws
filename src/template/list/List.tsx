import * as React from "react";
import "./List"
import { IUser } from "../../data/UsersInterface";

interface IListState {
  query: string;
  users: IUser[];
}

class List extends React.Component<{}, IListState> {
  public componentWillMount() {
    const jsonData = require("../../data/users.json");
    this.setState({ query: "", users: jsonData });
  }

  public render() {
    const filteredUsers = this.state.users.filter(
      user =>
        this.state.query === "" ||
        user.name.toLowerCase().indexOf(this.state.query.toLowerCase()) >= 0
    );

    return (
      <div className="list">
        <h1>LIST</h1>
        <input
          type="text"
          // tslint:disable-next-line: jsx-no-lambda
          onChange={e => this.setState({ query: e.target.value })}
        />
        <div className="list-users-wrapper">
          {/** key = k */}
          <h2>key = k</h2>
          <div
            className="list-users"
            style={{ height: filteredUsers.length * 40 }}
          >
            {filteredUsers.map((user, k) => (
              <div className="list-users-item" key={k} style={{ top: k * 40 }}>
                <h3>{user.name}</h3>
                <div className="list-users-item-rating">
                  <div style={{ width: user.rating * 20 + "%" }} />
                </div>
              </div>
            ))}
          </div>
          <h2>key = user.id</h2>
          <div
            className="list-users"
            style={{ height: filteredUsers.length * 40 }}
          >
            {filteredUsers.map((user, k) => (
              <div
                className="list-users-item"
                key={user.id}
                style={{ top: k * 40 }}
              >
                <h3>{user.name}</h3>
                <div className="list-users-item-rating">
                  <div style={{ width: user.rating * 20 + "%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default List;