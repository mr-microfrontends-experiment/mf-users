import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core';
import { User } from '../../models/user.interface';

import 'mf-components';

@Component({
  tag: 'mf-users',
  styleUrl: 'users.css',
  shadow: true,
})
export class Users {
  @State() private users: Array<User> = [];
  @Event() public outClickedItem: EventEmitter;

  public async fetchUsers(): Promise<Array<User>> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }

  public async connectedCallback(): Promise<void> {
    this.users = await this.fetchUsers();
  }

  public render() {
    return (
      <Host>
        <mf-list
          formatter={this.formatter}
          items={this.users}
          onOutClickedItem={event => this.handleItemClicked(event)}
        ></mf-list>
      </Host>
    );
  }

  private formatter(user: User) {
    return (
      <span>
        <strong>{user.name}</strong> &lt;{user.email}&gt;
      </span>
    );
  }

  private handleItemClicked(event: CustomEvent<User>): void {
    this.outClickedItem.emit(event.detail);
  }
}
