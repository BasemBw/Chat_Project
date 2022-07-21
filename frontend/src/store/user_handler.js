import { action, makeObservable, observable } from "mobx";
import axios from "axios";


export class User {
  constructor() {
    this.userName = "";
    this.userEmail = "";
    this.userPassword = "";
    this.image = "";
    this.imageURL = "";
    this.emailToLogin = "";
    this.passwordToLogin = "";
    this.userInfo = {};
    this.isOpenAccountInfo = false;
    this.searchSide = false;
    this.snackBar = false;
    this.searchUsersValue = ''


    makeObservable(this, {
      userName: observable,
      userEmail: observable,
      userPassword: observable,
      image: observable,
      snackBar:observable,
      imageURL: observable,
      userInfo:observable,
      searchUsersValue:observable,
      isOpenAccountInfo:observable,
      searchSide:observable,
      handleInputs: action,
      submitRegister: action,
      submitLogin:action,
      updateUserInfo:action,
      handleCloseAccountInfo:action,
      handleOpenAccountInfo:action,
      handleOpenSearchSide:action,
      handleCloseSearchSide:action
    });
  }

  handleInputs = (event) => {

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

  submitLogin = async () => {

    const email = this.emailToLogin;
    const password = this.passwordToLogin;

    try {
      
      const response = await axios.post('http://localhost:7070/login', { email, password })

      this.userInfo = {...response.data}

      localStorage.setItem("userData", JSON.stringify(response.data));

      return response.data

    } catch (error) {

      return false
      
    }

  } 

  searchUsers = async () => {

  }

  updateUserInfo = (userData) => this.userInfo = userData 

  handleCloseAccountInfo = () => this.isOpenAccountInfo = false

  handleOpenAccountInfo = () => this.isOpenAccountInfo = true

  handleOpenSearchSide = () => this.searchSide = true

  handleCloseSearchSide = () => this.searchSide = false
  
  handleCloseSnackBar = () => this.snackBar = false
  
}
