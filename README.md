
## To set up and run the course services project locally, follow these steps:
  ### 1. Clone the GitHub repository:
  Use the `git clone` command to clone the project repository from GitHub to your local machine

### 2. Open the project in Visual Studio Code:
Use the `code` command to open the project in Visual Studio Code.

### 3. Run `npm init` in the VS Code terminal:
This initializes a new Node.js project. It will prompt you to provide information about your project.
### 4.Install npm packages: 
Use `npm install` or `npm i` to install the project dependencies listed in the package.json file.
### 5.Create an .env file:
Create a new file named `.env` in the root folder of your project.
### 6. Set environment variables in .env file:
Open the `.env` file in a text editor and set the following variables

```http
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://<name>:<password>@cluster0.ph1akes.mongodb.net/mastery?retryWrites=true&w=majority
BCRYPT_SALT_ROUND=12

```
`DATABASE_URL=example(mongodb+srv://name:password@cluster0.ph1akes.mongodb.net/courses?retryWrites=true&w=majority)`

### 6. create a dist folder  in root file:

## Development Workflow

Run the project in development mode:

```bash
  npm run start:dev
```
Run in Production Mode:
```bash
  npm run start:prod
```
Build Project:
```bash
  npm run build
```



## API Reference

#### Domain: https://userservice-one.vercel.app/

#### Create a new user

```http
  POST /api/users
```
```http
  {
    "userId": 1234567985,
    "username": "john_doe",
    "password": "secure_password",
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "age": 28,
    "email": "john.doe@example.com",
    "isActive": true,
    "hobbies": [
        "reading",
        "traveling"
    ],
    "address": {
        "street": "123 Main Street",
        "city": "Anytown",
        "country": "USA"
    }
}
```



####  Retrieve a list of all users

```http
  GET /api/users
```
#### Retrieve a specific user by ID

```http
  GET /api/users/:userId

  userId=_id
```
```http
  _id:657f3dd66ad2876c200f34b6
```


#### Update user information

```http
  PUT /api/users/:userId
```
```http
  _id:657f3dd66ad2876c200f34b6
```
#### Delete a user

```http
 DELETE /api/users/:userId
```
```http
_id:657f3e17ea9d2b2decfa88e5
```

#### Add New Product in Order

```http
 PUT /api/users/:userId/orders
```
```http
  _id:657f3dd66ad2876c200f34b6
```
```http
{
    "productName": "Example Product",
    "price": 29.99,
    "quantity": 50
}
```

#### Retrieve all orders for a specific user

```http
 GET /api/users/:userId/orders
```
```http
  _id:657f3dd66ad2876c200f34b6
```
####  Calculate Total Price of Orders for a Specific User

```http
 GET /api/users/:userId/orders/total-price
```
```http
  _id:657f3dd66ad2876c200f34b6
```




## if need any information
contact me

- abulalajobayar@gmail.com
- jobayar.dev@gmail.com

