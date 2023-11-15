const express = require('express')
const cors = require('cors')
const convert = require('color-convert')
const PORT = 3000
const app = express()

function colorSchemes(hex) {
  return {
    colorValue: genScheme(hex, [0]),
    complementaryScheme: genScheme(hex, [180]),
    analogousScheme: genScheme(hex, [30, 330]),
    triadScheme: genScheme(hex, [240, 120]),
    squareScheme: genScheme(hex, [90, 180, 270]),
    splitComplementaryScheme: genScheme(hex, [150, 210]),
  }
  function genScheme(hex, degArr) {
    if (hex[0] == '#') hex.shift()
    if (degArr.some(v => v != 0)) degArr.unshift(0)
    let out = [...Array(degArr.length)].map(() => convert.hex.hsl(hex))
    degArr.forEach((deg, i) => (out[i][0] = (out[i][0] + deg) % 360))
    return out.map(v => convert.hsl.hex(v))
  }
}
app.use(cors())
app.use(express.static('public'))
app.get('/api/:color', (req, res) => {
  const hexIn = req.params.color
  res.json(colorSchemes(hexIn))
})
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${process.env.PORT || PORT}!`)
})
