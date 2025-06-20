# 📦 Node.js Project with Jest + ES Modules

This project demonstrates how to set up **Jest** for testing a **Node.js** application that uses **ES Modules (ESM)**.

> 📖 Reference: [How to set up Jest for ES Module](https://how-to.dev/how-to-set-up-jest-for-es-module)

---
# API Endpoints

## Airplanes

### Create Airplane

* **POST** `localhost:8000/api/v1/airplanes`
* Request Body: Airplane data (e.g. `{ name: 'Boeing 737', capacity: 200 }`)
* Response: Created Airplane object

### Get All Airplanes

* **GET** `localhost:8000/api/v1/airplanes`
* Response: Array of all Airplane objects

### Get Airplane by ID

* **GET** `localhost:8000/api/v1/airplanes/:id`
* Path Parameter: `id` (e.g. `123`)
* Response: Airplane object with matching `id`

### Delete Airplane by ID

* **DELETE** `localhost:8000/api/v1/airplanes/:id`
* Path Parameter: `id` (e.g. `123`)
* Response: Success message (e.g. `{ message: 'Airplane deleted successfully' }`)

## Airports

### Create Airport

* **POST** `localhost:8000/api/v1/airports`
* Request Body: Airplane data (e.g. `{ name: 'Indira Gandhi International Airport',
 code: 'DEL', address:'Palam, Delhi, India',cityId:3 }`)
* Response: Created Airport object

### Get All Airports

* **GET** `localhost:8000/api/v1/airports`
* Response: Array of all Airport objects

### Get Airport by ID

* **GET** `localhost:8000/api/v1/airports/:id`
* Path Parameter: `id` (e.g. `123`)
* Response: Airport object with matching `id`

### Delete Airport by ID

* **DELETE** `localhost:8000/api/v1/airports/:id`
* Path Parameter: `id` (e.g. `123`)
* Response: Success message (e.g. `{ message: 'Airport deleted successfully' }`)
