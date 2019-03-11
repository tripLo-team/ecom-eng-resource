# Cart APIS

## List all cart

Request:
`GET /api/v1/carts`

Response:

```json
{
  "data": [
    {
      "ID": 1,
      "CreatedAt": "2019-03-10T16:07:52.586446Z",
      "UpdatedAt": "2019-03-10T16:07:52.586446Z",
      "DeletedAt": null,
      "user_id": 123,
      "product_id": 123,
      "quantity": 123
    }
  ],
  "message": "success",
  "status": 200
}
```

## Get a cart record

Request:
`GET /api/v1/carts/{{userID}}/{{productID}}`

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

## Add cart record

Request:
`POST /api/v1/carts`

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
