
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true 
},
  username: { 
    type: String, required: 
    true, 
    unique: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  phoneNumber: String,
  gender: { 
    type: String, 
    enum: ["Male", "Female", "Other"] },
  dateOfBirth: Date,
  education: {
    qualification: String,
    institution: String,
    passingYear: String,
  },
  skills: [String],
  about: String,
}, { timestamps: true });


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const hashed = await bcrypt.hash(this.password, SALT_ROUNDS);
    this.password = hashed;
    next();
  } catch (err) {
    next(err);
  }
});


userSchema.methods.comparePassword = async function (plain) {
  return bcrypt.compare(plain, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
