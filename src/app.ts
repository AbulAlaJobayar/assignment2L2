import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { userRoute } from './app/modules/user/user.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api',userRoute)
// app.use('/api',categoryRoute)
// app.use('/api',reviewRoute)
app.get('/', (req: Request, res: Response) => {
res.json({
    status: 'success',
    message: 'Course Review server running'
  })
})

// app.use(notFound)
// app.use(globalErrorHandler)


export default app
