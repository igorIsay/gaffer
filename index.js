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
    description: 'The Aputure  300X is a Bi-Colour hard light that can take Bowens mount accessories such as a lantern, Fresnel 2x, and Spotlight Mount. It has an expanded vari-white CCT range of 2700-6500K',
    accessories: ['Color Temperature: 2700 to 6500K', 'Lumens: 56000', 'Weight: 25.13 lb / 11.4 kg', 'Mounting: Bowens Mount', 'Battery Plate: 2x V-Mount', 'Fixture: 5/8” Receiver'],
  },
  {
    id: 'forza60b',
    category: 1,
    title: 'Nanlite Forza 60B',
    price: 150,
    quantity: 2,
    description: 'The 60B is a bi-colour hard light source with colour temperature  variable from a warm 2700K to a cool 6500K. It can run off batteries via a D-Tap adaptor, and now come with a 5m DC head lead between the bower supply or the battery to make mounting to boom arms easier.',
    accessories: ['Lumens: 6732', 'CCT: 2700K - 6500K', 'Weight: 3.73 lb / 3.73 kg', 'Fixture Mount: 5/8" Receiver', 'Mounting: Forza 60 Quick Change'],
  },
  {
    id: 'forza60ProjectionMount',
    category: 1,
    title: 'Forza 60 Projection Mount',
    price: 100,
    quantity: 1,
    description: 'The Forza 19 degree projection mount offers sharp beam control and a long throw from a small, even battery operated portable light. This set up is ideal for highlighting details in a wide shots at night while being able to keep the light far enough away it is out of shot. Its internal cutter blades give accurate cuts that can be sharp or de-focused. Gobos can also be provided.',
    accessories: [],
  },
  {
    id: 'forza60sofbox',
    category: 1,
    title: 'Forza 60 Softbox',
    price: 50,
    quantity: 1,
    description: 'The Nanlite Forza 60 Softbox. A travel-friendly deep parabolic softbox designed to be the perfect companion to the Forza 60 LED with a removable front diffuser, silver interior and a fast set up speed ring.',
    accessories: [],
  },
  {
    id: 'aputureB7C',
    category: 2,
    title: 'Aputure Accent B7C',
    price: 100,
    quantity: 4,
    description: 'The Aputure Accent B7C is a fully intergraded RGBWW LED Light compatible with the Aputure Sidus Link app which enables you to remotely control your light from your mobile device. The light can be powered via AC and has an internal battery with a 70 minute run time at 100% brightness.',
    accessories: ['Colour Temperature: 3000K - 6500K', 'RGBWW', 'Charging: Via Edison Mount', '7 watt'],
  },
  {
    id: 'pavotube6C',
    category: 3,
    title: 'Nanlite Pavotube 6C',
    price: 150,
    quantity: 2,
    description: 'The Nanlite PavoTube 6C 10" RGBWW LED Tube has a built in battery and magnets for easy mounting. A CCT range from 2700 to 7500K with +/- green, it also has a full color HSI',
    accessories: ['Colour Temperature: 2700 to 7500K', 'RGB Mode', 'Weight: 9.6 oz / 272 g', 'Power: 6W', 'Run Time: 65 Minutes at Full Power', 'Charging Time: 2.5 Hours'],
  },
]


app.get('/', (req, res) => {
  res.render('home', {
    led: equipment.filter(item => item.category === 1),
    bulbs: equipment.filter(item => item.category === 2),
    tubes: equipment.filter(item => item.category === 3),
  })
})

app.get('/:id', (req, res) => {
  const item = equipment.find((item) => item.id === req.params.id);
  if (item === undefined) {
    res.status(404);
    res.render('404');
  } else {
    res.render('item', { item });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
