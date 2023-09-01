
//import { usersDB } from "./users.mjs";


let users = [
  {usuario: "admin", password: "password"}
]

// Convierto el objeto a una cadena JSON
let jsonUser = JSON.stringify(users)

//almaceno usuario en el local storage con la clave "usuarios"
const userJson = localStorage.setItem("usuarios", jsonUser)
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

//verificar que el usuario esté registrado, si está registrado va al login, sino continua.
//recorrer todos los usuario en el local y si coincide lleva a home

//ejemplo de guardar un usuario en el local sotrage con una promesa

const createLocal = () => {
return new Promise((resolve, reject) => {
  if (localStorage.getItem("users") === null) {
    let users = JSON.stringify([
      {
        user: "admin",
        password: "admin",
      },
    ]);
    localStorage.setItem("users", users);
    resolve('Local creado users')
  }else{
    reject('Base de datos ya existe')
  }
})
};
createLocal()
.then(resolve => alert(resolve))
.catch(error => alert(error))

let localUser = JSON.parse(localStorage.getItem("users"));
console.log(localUser);

//////////////////OTRO EJEMPLO/////////////////
// Función para guardar el usuario en el localStorage como una promesa
const guardarUsuarioEnLocalStorage = (usuario) => {
  return new Promise((resolve, reject) => {
    try {
      // Convertir el objeto de usuario a una cadena JSON
      const usuarioJson = JSON.stringify(usuario);

      // Almacenar el usuario en el localStorage bajo una clave única
      const userKey = "user-" + new Date().getTime(); // Ejemplo de clave única basada en la marca de tiempo
      localStorage.setItem(userKey, usuarioJson);

      resolve("Usuario guardado exitosamente.");
    } catch (error) {
      reject("Error al guardar el usuario: " + error);
    }
  });
}

// Evento submit del formulario
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe normalmente

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const correo = document.getElementById("correo").value;

  const nuevoUsuario = {
    nombre: nombre,
    edad: edad,
    correo: correo
  };

  // Llamar a la función para guardar el usuario en el localStorage como una promesa
  guardarUsuarioEnLocalStorage(nuevoUsuario)
    .then((mensaje) => {
      // Limpiar el formulario después de guardar los datos
      document.getElementById("userForm").reset();

      alert(mensaje);
    })
    .catch((error) => {
      alert("Error: " + error);
    });
});


/////VALIDACIÓN/////
//regexr.com para practicar expresiones regulares

//1-validar cada uno de los input

//1.1 busco los input
const signUpForm = document.getElementById("sign-up-form");
const inputsSignUpForm = document.getElementById("sign-up-form input");
const nombre = document.getElementById("nombre"); 
const user = document.getElementById("user"); 
const password = document.getElementById("password"); 
const email = document.getElementById("email");

//1.2 creo expresiones para validad cada uno de los campos

const expresion = {
  nombre: /^[a-zA-z]{4,20}$/, //Debe validar nombre completo del usuario (no puede contener caracteres especiales o numeros)
  usuario: /^\w{4,10}$/, //Debe contener al menos 4 caracteres, puede contener numeros y/o guion medio o guion bajo.
  password: /^.{8,15}$/, //Debe contener al menor 8 caracteres (no tiene limitacion de caracteres especiales o numeros)
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]$/ //Debe contener @ y .
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
