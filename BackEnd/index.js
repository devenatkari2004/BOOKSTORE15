const express = require('express')
const app = express()

const PORT=process.emv.PORT || 4000;

app.get('/', (req, res) => {
  res.send('BOOKSTORE15')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})