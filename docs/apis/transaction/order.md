# Order APIS

## List all order

Request:
`GET /api/v1/orders`

Response:

```json
{
  "data": [
    {
      "ID": 1,
      "CreatedAt": "2019-03-24T07:28:54.982598Z",
      "UpdatedAt": "2019-03-24T07:28:54.982598Z",
      "DeletedAt": null,
      "user_id": 1,
      "product_id": 1,
      "quantity": 0,
      "price": 0,
      "order_time": "2019-03-24T07:28:54.977957Z"
    },
    {
      "ID": 2,
      "CreatedAt": "2019-03-24T07:28:55.011144Z",
      "UpdatedAt": "2019-03-24T07:28:55.011144Z",
      "DeletedAt": null,
      "user_id": 2,
      "product_id": 2,
      "quantity": 0,
      "price": 0,
      "order_time": "2019-03-24T07:28:55.010311Z"
    }
  ],
  "message": "success",
  "status": 200
}
```

## Get orders of a user

Request:
`GET /api/v1/orders/user/{{userID}}`

Response:

```json
{
  "data": {
    "ID": 1,
    "CreatedAt": "2019-03-24T07:28:54.982598Z",
    "UpdatedAt": "2019-03-24T07:28:54.982598Z",
    "DeletedAt": null,
    "user_id": 1,
    "product_id": 1,
    "quantity": 0,
    "price": 0,
    "order_time": "2019-03-24T07:28:54.977957Z"
  },
  "message": "success",
  "status": 200
}
```

## Get orders of a product

Request:
`GET /api/v1/orders/product/{{productID}}`

Response:

```json
{
  "data": {
    "ID": 1,
    "CreatedAt": "2019-03-24T07:28:54.982598Z",
    "UpdatedAt": "2019-03-24T07:28:54.982598Z",
    "DeletedAt": null,
    "user_id": 1,
    "product_id": 1,
    "quantity": 0,
    "price": 0,
    "order_time": "2019-03-24T07:28:54.977957Z"
  },
  "message": "success",
  "status": 200
}
```

## Add order record

Request:
`POST /api/v1/orders`

```
{
	"orders": [
		{
			"UserID": 123,
			"ProductID": 234
		},
		{
			"UserID": 234,
			"ProductID": 123
		}
	]
}
```

Response:

```json
{
  "data": true,
  "message": "success",
  "status": 200
}
```
