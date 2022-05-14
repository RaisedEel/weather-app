# weather-app (Test Técnico)

Puedes encontrar la aplicación ya desplegada en (Por favor lee el apartado de abajo para evitar errores):
https://raisedeel.github.io/weather-app/

## Aviso Importante para usar el Proyecto:

### Se agrego un CORS proxy para que el proyecto desplegado pueda ser utilizado sin necesidad de la extensión, sin embargo esto solo permite hacer 60 solicitudes cada hora, por lo tanto el código fuente no utiliza este proxy. Si deseas utilizar el proyecto a su completo potencial sigue las instrucciones de abajo para instalar la extensión e implementar el proyecto de forma local.

## Instalación de la Extensión:

La api https://www.metaweather.com/api/ no permite CORS, por lo tanto para usar la aplicación
es necesario descargar la siguiente extensión que se salta esto:

Chrome & Edge:
https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

Mozilla:
https://addons.mozilla.org/es/firefox/addon/moesif-origin-cors-changer1/

Solo descarga la extensión y activala (debe decir ON), ya con eso la aplicación podrá hacer HTTPS requests sin problema alguno.
Nota: Desactiva o elimina la extensión cuando termines de usarla.

## Implementación del Proyecto:

1.- Solo descarga el proyecto directo de Github con el comando 'git clone' en la consola, con la dirección HTTP o SSH del repositorio. Esta dirección se puede encontrar al apretar el botón verde 'Code'. Ejemplo con HTTP: git clone https://github.com/RaisedEel/weather-app.git.

2.- Una vez descargado ve a la dirección donde lo descargaste y utiliza el comando 'npm install', esto instalará todas las dependencias necesarias automáticamente.

3.- Finalmente utiliza 'npm start' para que crear un servidor local para usar el proyecto. (No olvides instalar la extensión.)
