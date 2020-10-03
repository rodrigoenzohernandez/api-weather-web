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