import express from "express"
export const app = express()

app.use(express.json())



app.get('/sum' , (req ,res) => {
    const a = 2;
    const b = 3;
    const answer = a+b
    res.json({
        answer
    })
})


