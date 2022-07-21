const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true
  }
);


userSchema.methods.checkPassword = async function(EnterPassword){
  return await bcrypt.compare(EnterPassword , this.password)
}

userSchema.pre('save' , async function(next){

  if(!this.isModified){
    return
  }
  
  const HashSecure = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password , HashSecure)
})

const User = mongoose.model("User", userSchema);

module.exports = User;
