# Document manager app
## App para la gestión de archivos.


## Features

- Podrá subir archivos con los siguientes datos: Nombre, fecha de creación , tipo de documento, owner y descripción.
- Visualizar el listado de dichos archivos.
- Asignar usuarios a cada archivo.
- Editar.
- Eliminar.

## Tecnologias

- [React JS] - Libreria de javascript for web apps!
- [Reactstrap] - Libreria css basada en bootstrap pero adaptada a componentes.
- [Firebase] - Plataforma móvil de Google utilizada para almacenar los archivos.


## Instalación
Descargar el repositorio
```sh
git clone https://github.com/rube4489/document-manager-app.git

```

## Instalar las dependencias
En el directorio del proyecto, ejecutar
```sh
NPM
npm install

YARN
yarn install

```
## Configuración
Copiar el archivo .env-example y renombrarlo por .env
Ingresar variables de entorno
 REACT_APP_FIREBASE_APIKEY=""
 REACT_APP_FIREBASE_AUTHDOMAIN=""
 REACT_APP_FIREBASE_PROJECTID=""
 REACT_APP_FIREBASE_STORAGEBUCKET=""
 REACT_APP_FIREBASE_MESSAGINGSENDERID=""
 REACT_APP_FIREBASE_APPID=""
 REACT_APP_FIREBASE_MEASUREMENTID=""
 
 Nota.- Se debe ingresar https://firebase.google.com/?hl=es-419&gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0ssy2LLLZb9e3AcdUkURaT-4OEq3TnUTaxj-xN_z2jrO7KrfCi9bkaAvcEEALw_wcB&gclsrc=aw.ds para crear un proyecto y obtener dichas keys.
 ```sh
NPM
npm run start

YARN
yarn start

```