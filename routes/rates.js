const express = require("express")
const axios = require("axios")
const router = express.Router()

router.get("/rates", async (req, res) => {
    const baseCurrency = req.query.base
    const quoteCurrency = req.query.currency

    if(!baseCurrency){
        return res.status(400).json({
            error: {
                msg: "base invalid"
            }
        })
    }

    if(!quoteCurrency){
        return res.status(400).json({
            error: {
                msg: "currency invalid"
            }
        })
    }

    try {
     const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${quoteCurrency}`)

     res.status(200).json(response.data)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = router