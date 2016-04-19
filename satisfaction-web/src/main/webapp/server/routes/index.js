import express, {Router} from 'express'

const index = new Router()
    .get('/', (req, res) => {
        res.json({message: 'OK'})
    })

export {
    index
}
