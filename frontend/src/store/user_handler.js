import { action, makeObservable, observable } from "mobx";
import axios from "axios";

export class User {
  constructor() {
    this.userName = "";
    this.userEmail = "";
    this.userPassword = "";
    this.image = "";
    this.imageURL = ""

    makeObservable(this, {
      userName: observable,
      userEmail: observable,
      userPassword: observable,
      image: observable,
      imageURL: observable,
      handelRegisterInput: action,
      submitRegister: action,
    });
  }

  handelRegisterInput = (event) => {

    if (event.target.name === "image") {
      this.image = event.target.files[0]
    } else {
      this[event.target.name] = event.target.value
    }
  }

  submitRegister = async () => {

    if (this.image.type === "image/jpeg" || this.image.type === "image/png") {
      const data = new FormData()
      data.append("file", this.image)
      data.append("upload_preset", "Chat_App")

      try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/basemcloudimages/upload", data)
        this.imageURL = response.data.url.toString()
      }
      catch (error) {
        console.log(error)
      }
    }
    else {
      return alert("please chouse another image")
    }

    const userData = {
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword,
      image: this.imageURL
    }


    axios.post('http://localhost:7070/user', userData)
      .then((response) => alert("add user doni!"))
      .catch((error) => alert("add user failed"))


  }

  submitLogin = () => {

  }
}
