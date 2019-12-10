Starting Frontend and Backend servers

1. Start the Express API server using "npm run start:api" 
2. Start the application using "npm start"

API endpoints

1. method: POST
   URL: http://localhost:3005/login 
   request body: {
    "username":"Jacob",
    "password": "Jacob@1234"
}

2. method: POST
   URL: http://localhost:3005/user 
   request body: {
    "username": "MartI",
    "password": "MartI@1234",
    "email": "MartI@gmail.com",
    "first_name": "Mart",
    "last_name": "Imlach",
    "gender": "Male",
    "country": "USA"
}
