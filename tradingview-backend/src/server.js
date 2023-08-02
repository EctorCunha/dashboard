const express = require('express')
const port = 3333

const app = express()
app.use(express.json({ extended: false }))

const cors = require('cors')
app.use(cors())

const axios = require('axios')
app.get('/candles', async (req, res) => {
    const { symbol, interval } = req.query;
    if(!symbol || !interval) return res.status(422).send('Symbol and interval are required')
    
    try {
        const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=60`)
        res.json(response.data)
        
    } catch (error) {
        res.status(500).json(error.response ? error.response.data : error.message)
    }
    }
)

app.get('/', (req, res) => {
    res.json({msg: 'Hello world!!!'});
});

app.listen(port)
console.log('Server listenning...')