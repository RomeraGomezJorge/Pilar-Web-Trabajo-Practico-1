# Proyecto pilar-web - Trabajo Práctico 3

Este repositorio contiene el código correspondiente al Trabajo Práctico 3 del curso, en el cual se continúa el desarrollo del proyecto pilar-web. En este trabajo, se implementa la consulta de una API Rest para renderizar una lista de pokemons y mostrar detalles de cada uno. A continuación, se detallan las tareas realizadas en el Trabajo Práctico 3:

## Fachada API

En este trabajo, se implementó una fachada API para interactuar con los servicios REST. Se desarrollaron funciones para los métodos CRUD (POST, GET, PATCH, DELETE) que se utilizarán para gestionar los datos de los pokemons. Además, se definieron las rutas necesarias para conectar con los servicios REST y obtener los datos requeridos.

## Página fetch-List

En la página "fetch-List," se implementaron las siguientes funcionalidades:

- **JSX para Renderizar la Lista**: Se creó código JSX para renderizar la lista de pokemons siguiendo las pautas y la estructura vista en las clases y la guía proporcionada.

- **Obtener Lista Inicial**: Se configuró la página para obtener la lista inicial de pokemons desde la API y mostrarla en la interfaz de usuario.

- **Obtener Siguiente Página**: Se implementó la funcionalidad para obtener la siguiente página de pokemons desde la API y agregarlos a la lista existente.

- **Mostrar Detalle en Modal/Dialog**: Se creó un modal o dialog que se muestra al hacer clic en un pokemon de la lista. El modal muestra detalles importantes del pokemon, como la lista de movimientos, habilidades, alguna imagen de las sprites y el nombre.

## Instrucciones de Uso

1. Clonar este repositorio en su máquina local.
2. Instalar las dependencias necesarias ejecutando `npm install` en la raíz del proyecto.
3. Cambiar al branch "tp3" utilizando el comando `git checkout tp3`.
4. Ejecutar la aplicación con `npm start`.
5. La aplicación estará disponible en su navegador en la dirección [http://localhost:3000](http://localhost:3000).