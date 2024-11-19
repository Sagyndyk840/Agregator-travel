import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000
import express from 'express'
const app = express()
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import router from './router/index.js'
import errorMiddleware from './middleware/error-middleware.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'

const forms = multer()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(forms.array())
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(errorMiddleware)

const start  = async () =>  {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`listening server on port ${PORT} http://localhost:${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

start()