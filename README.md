# CAPHILL COFFEE BE

This app is the back-end server for [Caphill-Coffee](https://github.com/alfonsojack/caphill-coffee) 

## INSTALLATION AND SETUP
Fork this repository
In your terminal `git clone <ssh>`
`cd` into the repo and run `npm i` 
Run `nodemon server.js`

## ENDPOINTS

| Method | Endpoint | Request Body | Sample Response |
| ---- | ------ | ----------| ------------ | -------------- |
| `GET` | `’/’` | n/a | `[{id: 1, name: “Dazbog Coffee”, img: “exampleurl.com”, address: “1201 E 9th Ave, Denver, CO 80218”, hours: {Monday: “6:00am - 4:00pm”, Tuesday: …}, phoneNumber: “303-837-1275”, website: “https://dazbog.com”, foodProvided: true, dineIn: true, takeOut: true, wheelchairAccessible: true, contactlessPay: true, rating: {thumbsUp: 2, thumbsDown: 1}]` |
|`POST` | `’/SelectedShop/:id’` | `{id: 1, rating: {thumbsUp:  #, thumbsDown: #} }` | 


| Method | Endpoint | Request Body | Sample Response |
--- | --- | --- | ---
`GET` | `'/'` | n/a | `[{id: 1, title: '', description: ''}]`
`POST` | `'/'` | `{title: 'Something', description: 'Another'}` | `{id: 2, title: 'Something', description: 'Another'}`




This app is the back-end server for the PetBook FE.


## Getting started


### Installation


1. Clone down this repository.
- `git clone git@github.com:aliceabarca/petbook-be.git`
2. Change into the new directory.
- `petbook-be`
3. Install the dependencies.
- `npm install`
4. Start the server.
- `npm start`


### Endpoints


| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/pets` | GET | not needed | Object of 'pets' with an Array of all existing pets: `{pets: [{ { "name": "Oreo", "nickname": "Oreo", "age": 2.5, "funFact": "He's had..", "type": "Cat" }, {...}, ... ]` |
| `http://localhost:3001/api/v1/pets` | POST | `{name: <String>, nickname: <String>, age: <Number>, funFact: <String>, type: <String>}` | Add new pet: `{ { "name": "Oreo", "nickname": "Oreo", "age": 2.5, "funFact": "hes had..", "type": "Cat" }` |
| `http://localhost:3001/api/v1/pets/:id` | GET | not needed | Object of single pet details: `{ id: 3, name: "Oreo", nickname: "Oreo", age: 2.5, funFact: "He's had..", type: "Cat" }` |
| `http://localhost:3001/api/v1/pets/:id` | DELETE | not needed | Delete pet |


