# api-weather

Es una aplicación web de consulta de clima que permite visualizar el pronostico actual y los próximos 5 días, tanto para la ciudad actual (determinada a partir de la IP del cliente), como para otras 5 ciudades seleccionables.

## Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

* Tener instalado [NodeJS](https://nodejs.org/es/)
* Conexión a internet
* Descargar el proyecto

```
git clone https://github.com/rodrigoenzohernandez/api-weather-web.git
```

* Estar registrado en Heroku (_Si es usuario gratuito, tener menos de 5 proyectos creados_)
* Tener instalado [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

### Instalación 🔧

Ingresar al directorio del proyecto:
```
cd api-weather-web
```

Instalar las dependencias:
```
npm install
```

Iniciar sesion en heroku:
```
heroku login
```
Crear un nuevo proyecto en Heroku

```
heroku create
```
Pushear los cambios al repod e Heroku
```
git push heroku master
```
_Si no funciona el deploy, puede que sea necesario apuntar hacia el repo de Heroku_

```
heroku git:remote -a herokuAppName
```

Ingresar al link que genera el deploy.

Ya podes usar la web! Por defecto se carga la el pronóstico del lugar en el que te encontras (en base a tu IP publica).

Podes seleciconar cualquiera de las 5 ciudades en al lista y presionar "Consultar".

![Pagina principal](https://raw.githubusercontent.com/rodrigoenzohernandez/api-weather-web/master/api-weather/public/images/img-for-readme.PNG "api-weather")


## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas, ir al directorio del proyecto y ejecutar el comando:

```
npm test
```

Al finalizar se mostrará un resumen indicando pruebas totales, correctas e incorrectas.

### Pruebas ⌨️

#### CP01 - Test index route

* Propósito: Probar la ruta que renderiza el index del sitio web.
* Salida esperada: HTTP 200 OK
* Severidad: Grave

#### CP02 - test location route

* Propósito: Probar la ruta /location, que devuelve en formato JSON los datos de la ubicación de acuerdo a la IP pública del navegador.
* Salida esperada: HTTP 200 OK
* Severidad: Grave

#### CP03 - test current route

* Propósito:  Probar la ruta /current/, que devuelve los datos de ubicación actual y el estado del tiempo actual.
* Salida esperada: HTTP 200 OK
* Severidad: Grave

#### CP04 - test current route with city

* Propósito: Probar la ruta /current/ pero agregando una ciudad como parámetro opcional. Devuelve datos del clima actual respecto a al ciudad ingresada.
* Salida esperada: HTTP 200 OK
* Severidad: Grave

#### CP05 - test forecast route

* Propósito: Probar la ruta /forecast/ que devuelve en formato JSON los datos de la ubicación en base a la IP del navegador y el estado del tiempo a 5 días.
* Salida esperada: HTTP 200 OK
* Severidad: Grave

#### CP06 - test forecast route with city

* Propósito: Probar la ruta /forecast/ pero agregando una ciudad como parámetro opcional.  Devuelve datos del clima a 5 días respecto la ciudad ingresada.
* Salida esperada: HTTP 200 OK
* Severidad: Grave

#### CP07 - force wrong route

* Propósito: Probar una ruta incorrecta, para comprobar si ante una ruta de este tipo, se envía al usuario a la vista de error, indicando que no se encontró el contenido que desea obtener.
* Salida esperada: HTTP 200 OK
* Severidad: Media

## Construido con 🛠️

* [NodeJS](https://nodejs.org/es/) - Entorno en tiempo de ejecución.
* [JavaScript](https://www.javascript.com/) - Lenguaje de programación.
* [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Lenguaje de marcado de hipertexto.
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Hojas de estilo en cascada 
* [Express](https://expressjs.com/es/) - Backend Framework
* [JSON](https://www.json.org/json-en.html) - Formato de texto para el intercambio de archivos
* [Jest](https://jestjs.io/) - Testing Framework
* [supertest](https://www.npmjs.com/package/supertest) - Módulo de NodeJS para probar servicios.
* [node-fetch](https://www.npmjs.com/package/node-fetch) - Modulo de NodeJS para consumir servicios.
* [axios](https://desarrolloweb.com/articulos/axios-ajax-cliente-http-javascript.html) - Cliente HTTP basado en promesas para JavaScript
* [npm](https://www.npmjs.com/) - Manejador de paquetes
* [weather-API](https://openweathermap.org/api) - API que brinda la información sobre el clima.
* [GitFlow](https://www.gitflow.com/) - Flujo de trabajo de git.