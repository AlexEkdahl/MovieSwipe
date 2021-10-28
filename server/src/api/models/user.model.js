import mongoose from 'mongoose'
import { compare } from '../../util/index.js'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Must provide a username'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Must provide a email'],
      trim: true,
      unique: true,
    },
    password: { type: String, required: [true, 'Must provide a password'] },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

userSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password)
}

export default mongoose.model('user', userSchema)
