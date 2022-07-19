import { action, makeObservable, observable } from "mobx";

export class User {
  constructor() {
    this.userName = "";
    this.userEmail = "";
    this.userPassword = "";
    this.userImage = "";

    makeObservable(this, {
      userName: observable,
      userEmail: observable,
      userPassword: observable,
      userImage: observable,
      handelRegisterInput: action,
    });
  }

  handelRegisterInput = (event) => {
      this[event.target.name] = event.target.value
  }
}
