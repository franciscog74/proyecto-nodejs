# Proyecto final - Desarrollo de APIs con Node.js
Página que permite guardar datos de los empleados de una empresa a usuarios registrados. Permite crear, leer, actualizar y eliminar información según el acrónimo CRUD para la persistencia de bases de datos. Los usuarios deben de estar dados de alta previamente en la tabla _usuarios_.

__Integrantes:__

- Francisco Gutiérrez Ruiz

## Contenido

- [Componentes](#componentes)
    - [Dependencias](#dependencias)
    - [Proyecto](#proyecto)
    - [Base de datos](#base-de-datos)
- [Modo de uso](#modo-de-uso)
    - [Instalación](#instalación)
    - [API](#api)
    - [Interfaz de usuario](#interfaz-de-usuario)

## Componentes

Utiliza [Node.js](https://nodejs.org/) como entorno y [Express](https://expressjs.com/) como framework.

### Dependencias

- [express](https://expressjs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [morgan](https://github.com/expressjs/morgan#readme)
- [mysql](https://github.com/mysqljs/mysql#readme)
- [nodemon](https://nodemon.io/)

### Proyecto

- `index.js` - Punto de entrada del proyecto.
- `config` - Aloja el objeto que se conecta a la base de datos.
- `helpers` - Contiene una función que sustituye `'` por `\'` en las variables utilizadas en sentencias SQL.
- `middleware` - Archivo que habilita el CORS, autenticación y mensaje para direcciones inexistentes.
- `routes` - Manejadores de rutas de las URLs disponibles.
- `UI` - Interfaz de usuario (véase [Interfaz de usuario](#interfaz-de-usuario)), y archivos `.js` y `.css` [^1].

### Base de datos

Archivo de tipo SQL en el directorio raíz.

## Modo de uso

### Instalación

1. Descarga [Node.js](https://nodejs.org/es/download).
2. Descarga el proyecto.
3. Importa el archivo `empleados_node.sql` en un servidor de bases de datos. Se recomeinda [XAMPP](https://www.apachefriends.org/download.html)[^2].
4. En la consola, dirígete a la carpeta raíz del proyecto y ejecuta el comando `npm install`.
5. Ejecuta el comando `npm start`.
6. Listo, ahora podrás acceder al proyecto desde la [siguiente URL](http://localhost:3000/).

### API

El cuerpo de las respuestas tiene el siguiente formato:

```
{
    code: ...,
    message: ...
}
```

Las siguientes rutas están habilitadas:

- `/login/` (__POST__) - Inicio de sesión
    - __Parámetros__: username, password
    - __Mensaje__: _token_ de autenticación
- `/` (__POST__) - Petición _dummy_ para autenticar al usuario en la [interfaz](#interfaz-de-usuario)
    - __Mensaje__: Mensaje de error o éxito
- `/insertar/` (__POST__) - Insertar empleado en la base de datos
    - __Parámetros__: nombre, apellido_pat, apellido_mat, telefono, email, direccion
    - __Mensaje__: Mensaje de error o éxito
- `/consultar/` (__GET__) - Consultar información de empleados
    - __Query string__: busqueda (nombre y apellidos)
    - __Mensaje__: Arreglo con registros o mensaje de error
- `/modificar/` (__PUT__) - Modificar información
    - __Parámetros__: id, nombre, apellido_pat, apellido_mat, telefono, email, direccion
    - __Mensaje__: Mensaje de error o éxito
- `/borrar/id/` (__DELETE__) - Borrar el usuario con el `id` de la URL
    - __Mensaje__: Mensaje de error o éxito

> [!IMPORTANT]
> Todas las rutas (excepto `/login/`) requieren el uso del encabezado `Authorization` con el _token_ de `login` para poder acceder a las mismas.

### Interfaz de usuario

Las siguientes rutas están habilitadas:

- `/login/` - Inicio de sesión
- `/` - Menú principal
- `/insertar/` - Insertar empleado
- `/consultar/` - Consultar información de empleados
- `/modificar/` - Modificar información
- `/borrar/` - Borrar un usuario

[^1]: Estos archivos están almacenados de forma estática en sus respectivos subdirectorios
[^2]: De no ser así, tal vez tengas que modificar el archivo `config/database.js` o instalar otra dependencia
