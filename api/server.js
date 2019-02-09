const express = require('express')
const logger = require('morgan')
const app = express()
const port = 3000

app.use(logger())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/products', (req, res) =>
  res.json({
    products: [
      {
        product_id: '1',
        product_name: 'a',
        product_description: 'abc',
        unit_price: '10',
        supplier_id: '1',
        category: 'a',
        units_in_stock: '5',
        units_on_order: '2',
        images: [
          {
            image_id: '1',
            path:
              'https://rukminim1.flixcart.com/image/300/300/jmgmmq80/induction-cook-top/g/z/6/prestige-pic-20-0-original-imaf9czcdzgp2puz.jpeg?q=70',
            product_id: '1',
            image_label: 'a',
          },
          {
            image_id: '2',
            path:
              'https://rukminim1.flixcart.com/flap/300/300/image/cef934a1f5a59f90.jpg?q=70',
            product_id: '1',
            image_label: 'b',
          },
        ],
      },
      {
        product_id: '2',
        product_name: 'b',
        product_description: 'bcd',
        unit_price: '11',
        supplier_id: '2',
        category: 'a',
        units_in_stock: '6',
        units_on_order: '3',
        images: [
          {
            image_id: '2',
            path:
              'https://rukminim1.flixcart.com/flap/300/300/image/cef934a1f5a59f90.jpg?q=70',
            product_id: '1',
            image_label: 'b',
          },
          {
            image_id: '1',
            path:
              'https://rukminim1.flixcart.com/image/300/300/jmgmmq80/induction-cook-top/g/z/6/prestige-pic-20-0-original-imaf9czcdzgp2puz.jpeg?q=70',
            product_id: '1',
            image_label: 'a',
          },
        ],
      },
      {
        product_id: '3',
        product_name: 'c',
        product_description: 'cde',
        unit_price: '12',
        supplier_id: '3',
        category: 'a',
        units_in_stock: '7',
        units_on_order: '4',
        images: [
          {
            image_id: '3',
            path:
              'https://rukminim1.flixcart.com/image/300/300/jjsw4nk0/smartwatch/s/m/w/amzbipblk-huami-original-imaf7azyveg5ngjb.jpeg?q=70',
            product_id: '1',
            image_label: 'b',
          },
          {
            image_id: '4',
            path:
              'https://rukminim1.flixcart.com/image/300/300/jkybwcw0/mobile-phone-lens/h/d/h/universal-smartphone-lens-ivoltaa-original-imaf85r8cv3fzeza.jpeg?q=70',
            product_id: '1',
            image_label: 'a',
          },
        ],
      },
      {
        product_id: '4',
        product_name: 'd',
        product_description: 'def',
        unit_price: '13',
        supplier_id: '4',
        category: 'a',
        units_in_stock: '8',
        units_on_order: '5',
        images: [
          {
            image_id: '4',
            path:
              'https://rukminim1.flixcart.com/image/300/300/jkybwcw0/mobile-phone-lens/h/d/h/universal-smartphone-lens-ivoltaa-original-imaf85r8cv3fzeza.jpeg?q=70',
            product_id: '1',
            image_label: 'a',
          },
          {
            image_id: '3',
            path:
              'https://rukminim1.flixcart.com/image/300/300/jjsw4nk0/smartwatch/s/m/w/amzbipblk-huami-original-imaf7azyveg5ngjb.jpeg?q=70',
            product_id: '1',
            image_label: 'b',
          },
        ],
      },
    ],
  })
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
