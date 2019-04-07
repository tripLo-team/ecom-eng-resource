# User Account APIS

## List all user

Request:
`GET /user/list`

Response:

```json
{
    "data": [
        {
            "_id": "5c8743a3afacb93cd8718537",
            "name": "test name 3",
            "email": "nam22@email.com",
        },
        {
            "_id": "5c8749fcc85b8d4106466fd9",
            "name": "test  name 01",
            "email": "name111@email.com",
        },
        {
            "_id": "5c874a13c85b8d4106466fda",
            "name": "test  name 02",
            "email": "name111@email.com",
        },
    ]
}
```

## Get a user record

Request:
`GET /user/get/{{userID}}`

Response:

```json
{
    "data": {
        "_id": "5c8743a3afacb93cd8718537",
        "name": "test name 3",
        "email": "nam22@email.com",
    }
}
```

## Create a user record

Request:
`POST /user/create`

```
{
	"name": "test  create name",
  "email": "name111@email.com",
}
```

Response:

```json
{
    "data": {
        "_id": "5c8743a3afacb93cd8718537",
        "name": "test  create name",
        "email": "name111@email.com",
    }, 
    "message": "success"
}
```

## Update a user record

Request:
`PUT /user/update/{{userID}}`

```
{
	"name": "test  create name",
  "email": "name111@email.com",
}
```

Response:

```json
{
    "data": {
        "_id": "5c8743a3afacb93cd8718537",
        "name": "test  create name",
        "email": "name111@email.com",
    }, 
    "message": "user updated"
}
```

## Delete a user record

Request:
`DELETE /user/delete/{{userID}}`

Response:

```json
{
    "deletedData": {
        "_id": "5c8743a3afacb93cd8718537",
        "name": "test  create name",
        "email": "name111@email.com",
    }, 
    "message": "success delete user"
}
```
