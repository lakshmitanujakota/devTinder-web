# devTinder web

 - Create a vite + react applicattion 
 - Remove un necessary code and files and create a hello world in app.jsx
 - Install Tailwind CSS   
 - Install DaisyUI
 - Add navbar in App.js from daisyUI 
 - Create a separate NavBar.jsx and export it
 - Install reater router dom
 - Create a BrowserRouter > Routes > Route= /Body -RouteChildren
 - Create an Outlet in your Body Component
 - Create a footer

 - Create a Login Page
 - Install axios
 - CORS - Install cors in backend
      - add middleware to with configuration: originn , credentials: true in Backend Code
 - Whenever your are making API Call pass axios =>{withCredentials: true}
 - Install Redux ToolKit 
 - Install react- redux
 - Create configureStore - appStore - reducer
 - Add provider in app.js
 - Create createStore -  userSlice
      - reducers
      - export userSlice.reducer , and userSlice.actios
 - Add the reducer to store
 - Add redux devtools in chrome
 - Login and see if user data is coming properly in the store
 - NavBar should update as soon as user logs in 
 refactor the code to add constants file + create a components folder


 - You Should not be access other routes without login
 - If tokens is not present, redirect user to login page
 - Logout
 - Get the feed and add the feed in the store
 - Build the user card on feed page

 Body
   NavBar
   Route="/" => Base page
   Route="/login" => Login page
   Route="/connection" => Connection pages
   Route="/profile" => profile


