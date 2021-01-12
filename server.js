const express = require("express")

const app = express()
const appApiDirectory = require("./routes/rates.js")

app.get('/', (req, res) => {
    res.send("Welcome to RATES-API")
})

app.use("/api", appApiDirectory)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))