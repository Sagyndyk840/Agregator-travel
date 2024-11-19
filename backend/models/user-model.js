import {Schema, model} from 'mongoose'

const UserSchema = new Schema({
  name: {type: String, required: true },
  lastname: {type: String, required: true },
  email: {type: String, unique: true, required: true },
  password: {type: String, required: true },
  // role: {
  //   type: String,
  //   enum: ['user', 'admin'],
  //   default: 'user',
  //   required: true,
  // }
})

export default model('User', UserSchema)