const express = require('express')
const app = express();
const port = 3000;
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products.map(i => {
  return i.thumbnail
});

app.get('/' , (req,res) => {
  res.json({
  products
  })
})

app.get('/about' , (req,res) => {
     console.log(req.query)
})

app.listen(port, () => {
    console.log("Running......")
} )