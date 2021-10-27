import Mongoose from 'mongoose'

const connectToDB = async (url) => {
  await Mongoose.connect(url)
  console.log('CONNECTED TO MONGODB')
}

export default connectToDB
