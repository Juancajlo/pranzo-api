
# Pranzo API

API for an e-commerce app, for university purposes only.

With this API, it will be possible to manage the business data, 
which will be stored in a PostgreSQL database. 
The database entities and relationships were created with the 
Sequelize ORM using vanilla JavaScript. 

## Deployment

To deploy this project run

```bash
  npm start
```


## API Reference

### User Model
#### Auth

```http
  POST /api/auth/register
```
```http
  POST /api/auth/login
```
### Account Model
#### Get accounts

```http
  GET /api/accounts/
```

#### Create venezuelan account

```http
  POST /api/accounts/venezuelan
```

#### Create american account

```http
  POST /api/accounts/american
```

#### Create complete account

```http
  POST /api/accounts/complete
```

#### Update account

```http
  PUT /api/accounts/:id
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `string` | **Required**. Id of account to fetch |


#### Delete account

```http
  DELETE /api/accounts/:id
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `string` | **Required**. Id of account to fetch |

### Dish Model 
#### Get dishes

```http
  GET /api/dishes/
```

#### Create dish

```http
  POST /api/dishes/
```

#### Update dish

```http
  PUT /api/dishes/:id
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `string` | **Required**. Id of account to fetch |


#### Delete dish

```http
  DELETE /api/dishes/:id
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `string` | **Required**. Id of account to fetch |


## Order Model
#### Create order

```http
  POST /api/orders/
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`SEED`

`TOKEN_EXPIRY`


## Authors

- [@Juancajlo](https://www.github.com/Juancajlo)

