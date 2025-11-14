


backend
make a backend folder
npm init
npm install cors dotenv express jsonwebtoken mongoose nodemon
node modules::
Script:{

"start": "node server.js",
    "dev": "nodemon server.js"

}
add type after main
"type": "module",

create serrver.js  (as we add script sec  server.js)
set up server
crate    .env file  
MONGO_URI="mongodb+srv://sayantansahoo03:k4YsKmeYoPmOgXnf@cluster0.ynpdhe5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

front end
npm create vite@latest my-app

npm install
npm install axios
npm install react-router-dom


install and import telwind css
imporn app.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Sahoo />} />
      </Routes>
    </BrowserRouter>
  );
}














