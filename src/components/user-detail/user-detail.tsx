import { Component, ComponentInterface, Host, h, Prop, State, Watch } from '@stencil/core';
import { User } from '../../models/user.interface';

@Component({
  tag: 'mf-user-detail',
  styleUrl: 'user-detail.css',
  shadow: true,
})
export class UserDetail implements ComponentInterface {
  @Prop() userId: number = null;

  @State() private user: User = null;

  @Watch('userId')
  async watchUserId(newId: number): Promise<void> {
    this.user = null;
    this.user = await this.fetchUser(newId);
  }

  public async fetchUser(userId: number): Promise<User | null> {
    if (!this.userId) {
      return null;
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  }

  render() {
    if (this.user) {
      return (
        <Host>
          <div class="card">
            <h1>{this.user.name}</h1>
            <p class="title">CEO &amp; Founder, {this.user.company.name}</p>
            <p>
              {this.user.address.street}
              <br />
              {this.user.address.zipcode} {this.user.address.city}
            </p>

            <p>
              <a href={'mailto:' + this.user.email} class="button">
                Contact
              </a>
            </p>
          </div>
        </Host>
      );
    } else {
      return <span>loading ...</span>;
    }
  }
}
