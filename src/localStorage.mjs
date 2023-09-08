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

    export {createLocal}