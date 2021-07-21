const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.engine(
    'handlebars',
    handlebars({ defaultLayout: 'main' })
)
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(express.static('public'));

equipment = [
  {
    id: '300x',
    category: 1,
    title: 'Aputure 300x',
    price: 450,
    quantity: 1,
  },
  {
    id: 'forza60b',
    category: 1,
    title: 'Nanlite Forza 60B',
    price: 150,
    quantity: 2,
  },
  {
    id: 'forza60ProjectionMount',
    category: 1,
    title: 'Forza 60 Projection Mount',
    price: 100,
    quantity: 1,
  },
  {
    id: 'forza60sofbox',
    category: 1,
    title: 'Forza 60 Softbox',
    price: 50,
    quantity: 1,
  },
  {
    id: 'aputureB7C',
    category: 2,
    title: 'Aputure Accent B7C',
    price: 50,
    quantity: 4,
  },
  {
    id: 'pavotube6C',
    category: 3,
    title: 'Nanlite Pavotube 6C',
    price: 100,
    quantity: 2,
  },
]


app.get('/', (req, res) => {
  res.render('home', {
    led: equipment.filter(item => item.category === 1),
    bulbs: equipment.filter(item => item.category === 2),
    tubes: equipment.filter(item => item.category === 3),
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
