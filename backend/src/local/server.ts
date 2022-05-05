'use strict';

import express, { Application, Request, Response } from "express"
const HOST: string = process.env.HOST || 'localhost'
const PORT: string|number = process.env.PORT || 3000
const app: Application = express();

/*

    curl http://localhost:3000

    curl -v --header "Content-Type: application/json" \                                      
      --request POST \
      --data '{"logo":"xyz"}' \                 
      http://localhost:3000/tshirt/123

*/


// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Hello World!'
    })
})

app.post('/tshirt/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const { logo } = req.body

    console.log('get body -> ', req.body)

    if (!logo) {
        res.status(418).send({
            message: 'we need a logo!'
        })
    }

    res.send({
        tshirt: `shirt with your ${logo} and ID of ${id}`
    })
})

try {
    app.listen(PORT, ():void => {
        console.log(`it's alive on http://${HOST}:${PORT}`)
    })
} catch (error) {
    console.error(`Error occured: ${ error }`)
}

