
//import { usersDB } from "./users.mjs";

//almaceno usuario en el local storage

const users = [
{usuario: "admin", password: "password"}
]

const userJson = localStorage.setItem("usuarios", JSON.stringify(users))
console.log(userJson)

//creo nuevo usuario en el local

const newUser = {
  usuario: "newUser", 
  password: "newPass"

}

let cambio = JSON.parse(localStorage.getItem("usuarios"))

cambio.push(newUser)

JSON.stringify(cambio)

localStorage.setItem("usuarios", JSON.stringify(cambio))

//verificar que el usuario esté registrado, si está registrado va al login, sin o continua.

// const createLocal = () => {
//   if (localStorage.getItem("users") === null) {
//     let users = JSON.stringify([
//       {
//         user: "admin",
//         password: "admin",
//       },
//     ]);
//     localStorage.setItem("users", users);
//   }
// };
// createLocal();
// let localUser = JSON.parse(localStorage.getItem("users"));
// console.log(localUser);

//regexr.com para practicar expresiones regulares

//1-validar cada uno de los input

//1.1 busco los input
const signUpForm = document.getElementById("sign-up-form");
const inputsSignUpForm = document.getElementById("sign-up-form input");
const nombre = document.getElementById("nombre"); //Debe validar nombre completo del usuario (no puede contener caracteres especiales o numeros)
const user = document.getElementById("user"); //Debe contener al menos 4 caracteres, puede contener numeros y/o guion medio o guion bajo.
const password = document.getElementById("password"); //Debe contener al menor 8 caracteres (no tiene limitacion de caracteres especiales o numeros)
const email = document.getElementById("email");

//1.2 creo expresiones para validad cada uno de los campos

const expresion = {
  nombre: /^[a-zA-z]{4,20}$/,
  usuario: /^\w{4,10}$/,
  password: /^.{8,15}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]$/
};

const checkValue = (e) => {
  if (e.target.name === "nombre") {
    if (expresion.nombre.test(e.target.value)) {
      console.log("Paso la validacion");
    } else {
      console.log(
        "Tu nombre debe contener de 1 a 40 chars. No puede contener numeros"
      );
    }
  }
  if (e.target.name === "user") {
    if (expresion.usuario.test(e.target.name)) {
        console.log("Paso la validacion");
    } else {
      console.log(
        "Tu nombre de usuario debe contener al menos 4 caracteres, puede contener numeros y/o guion medio o guion bajo."
      );
    }
  }
  if (e.target.name === "password") {
    if (expresion.password.test(e.target.value)) {
        console.log("Paso la validacion");
    } else {
      console.log(
        "Tu password debe contener al menos 8 caracteres (no tiene limitacion de caracteres especiales o numeros)"
      );
    }
  }
  if (e.target.name === "email") {
    if (expresion.email.test(e.target.value)) {
        console.log("Paso la validacion");
    } else {
      console.log(
        "Tu email debe contener al menos 8 caracteres (no tiene limitacion de caracteres especiales o numeros)"
      );
    }
  }
};

nombre.addEventListener('keyup', checkValue)
user.addEventListener('keyup', checkValue)
password.addEventListener('keyup', checkValue)
email.addEventListener('keyup', checkValue)

const btnRegistrarUsuario = document.getElementById("btn-registrar-usuario");

//crear evento del btn para que me suba los datos ingresados en el input
//pushear datos sobre el array de objetos






//compara con un metodo de array
