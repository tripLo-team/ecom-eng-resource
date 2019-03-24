# Product APIS

## List all product

Request:
`GET /api/v1/products`

Response:

```json
{
  "products": [
    {
      "product_id": 1,
      "product_description": "abc",
      "unit_price": 123,
      "units_in_stock": 10,
      "units_in_order": 2,
      "category_id": 1,
      "images": [
        {
          "id": 1,
          "path": "abc",
          "product_id": 1
        }
      ],
      "product_name": "Shirt"
    }
  ]
}
```

## Get a product record

Request:
`GET /api/v1/products/{{userID}}/{{productID}}`

Response:

```json
{
  "data": {
    "ID": 1,
    "CreatedAt": "2019-03-10T16:07:52.586446Z",
    "UpdatedAt": "2019-03-10T16:07:52.586446Z",
    "DeletedAt": null,
    "user_id": 123,
    "product_id": 123,
    "quantity": 123
  },
  "message": "success",
  "status": 200
}
```

## Update a product record

Request:
`POST /api/v1/products`

```
{
	"user_id": 123,
    "product_id": 123,
    "quantity": 123
}
```

Response:

```json
{
  "data": null,
  "message": "success",
  "status": 200
}
```
