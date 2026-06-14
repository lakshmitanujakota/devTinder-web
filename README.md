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

 - Edit Profile Feature
 - Show Toast Message on save of Profile
 - New page - to see all my connections
 - New Page -To see all my requests recived

 - feature - Accept/Reject cconnection Requests 
  - Send / Ignore the user
  - Sign Up
  - Testing

 Body
   NavBar
   Route="/" => Base page
   Route="/login" => Login page
   Route="/connection" => Connection pages
   Route="/profile" => profile


 # Deployment 


  - signup to AWS
  - create instance - launch instance 
  - On your terminal 
  - Go to your folder where you downloaded the key 
  -  
  - curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  - installed git devTinder back end & front end code in new instance
  - FrontEnd 
      - go inside this folder - cd devTinder-web
      - npm install -dependencies install
      - npm run build
      - sudo apt update
      - sudo apt install nginx
      - sudo systemctl start nginx
      - suod systemctl enable nginx
      - Cpoy code from dist(build file) command - to - /var/www/html
      - sudo scp -r dist/* /var/www/html/
      - Enable port: 80 of your instance
  - Backend 
      - go inside backend code folder
      - npm install
      - npm run start
      - allow the port in mongodb to all
      - Add the port 3000 in instance
      - install pm2 to run the application continously - 24/7 without manual run 
      - npm install pm2 -g
      - pm2 start npm --name "project-name" -- start
      - some pm2 commands to check (pm2 logs,pm2 list, pm2 flush, pm2 delete name, pm2 stop name, pm2 restart npm --start)
      - config nginx - sudo nano /etc/nginx/sites-available/default
      - restart ngin after adding service ip and location - sudo systemctl restart nginx
      - modify the front end code base url to /api 

  # Domain Name
    - Go to Godaddy Website and search for your project name 
    - Check for any avaiable Name
    - Create Account and fill tthe details accordingly  
    - Sign Up in cloudfare & add a new domain name
    - change the nameservers on godaddy and point it to cloudfare
    - wiaat for some time till your nameservers are updated
    - DNS record: map the ip to your app ip devTinder one A to - your ip 



  commands

  # Connect to EC2
ssh -i devTinder-secret.pem ubuntu@<EC2_PUBLIC_IP>

# Update packages
sudo apt update

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Load NVM in current session
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Verify NVM
nvm --version

# See available Node versions (optional)
nvm ls-remote

# Install Node.js 20 LTS
nvm install 20.20.2

# Use Node.js 20
nvm use 20

# Make Node.js 20 default
nvm alias default 20

# Verify installation
node -v
npm -v
nvm -v
