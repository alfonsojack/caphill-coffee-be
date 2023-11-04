
# CAPHILL COFFEE BE

This app is the back-end server for [Caphill-Coffee](https://github.com/alfonsojack/caphill-coffee) 

## INSTALLATION AND SETUP
1. Clone down this repository
- In your terminal `git clone <ssh>`
2. Change into the new directory
- `cd` into the repo
Install the dependencies
run `npm i` 
Start the server
run `nodemon server.js`

## ENDPOINTS
The server should be running locally at http://localhost:3001.

| Method | Endpoint | Request Body | Sample Response |
|--------|----------|--------------|-----------------|
| GET    | `/`      | n/a          | [{id: 1, name: “Dazbog Coffee”, img: “exampleurl.com”, address: “1201 E 9th Ave, Denver, CO 80218”, hours: {Monday: “6:00am - 4:00pm”, Tuesday: …}, phoneNumber: “303-837-1275”, website: “https://dazbog.com”, foodProvided: true, dineIn: true, takeOut: true, wheelchairAccessible: true, contactlessPay: true, rating: {thumbsUp: 2, thumbsDown: 1}] |
| POST   | `/SelectedShop/:id` | {id: 1, rating: {thumbsUp: #, thumbsDown: #}} | {id: 1, rating: {thumbsUp: #, thumbsDown: #}} |
