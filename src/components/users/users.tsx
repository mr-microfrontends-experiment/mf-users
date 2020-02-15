import { Component, Host, h, State } from "@stencil/core";
import { User } from "../../models/user.interface";

@Component({
  tag: "mf-users",
  styleUrl: "users.css",
  shadow: true
})
export class Users {
  @State() private users: Array<User> = [];

  public async fetchUsers(): Promise<Array<User>> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }

  public async connectedCallback(): Promise<void> {
    this.users = await this.fetchUsers();
  }

  public render() {
    return (
      <Host>
        <ul>
          {this.users.map(user => (
            <li>
              <strong>{user.name}</strong> &lt;{user.email}&gt;
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
