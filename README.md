README
Página Web Dragon Ball
Este proyecto es una página web dedicada a la serie Dragon Ball. Contiene información sobre la historia de las diferentes etapas de la serie, una tabla con las sagas y sus detalles, y una funcionalidad para sumar poderes.

Estructura del Proyecto
HTML (index.html)
CSS (styles.css)
JavaScript (script.js)
Formulario
El archivo HTML está dividido en varias secciones principales:

1. Encabezado (<header>)
Título y Logo:
Contiene un contenedor para el título con una imagen de fondo.
Una imagen del logo de Dragon Ball y un espacio para el título.
Navegación (<nav>):
Barra de navegación con enlaces a diferentes secciones y sitios web relacionados con Dragon Ball.
2. Cuerpo Principal (<div class="container">)
Columna Izquierda:
Información sobre las diferentes etapas de la serie: Dragon Ball, Dragon Ball Z y Dragon Ball Super.
Columna Derecha:
Tabla con información detallada sobre las diferentes sagas de la serie, incluyendo el número de episodios y los años de emisión.
3. Suma de Poderes (<div class="sum-container">)
Formulario interactivo para sumar dos números (representando poderes) y mostrar el resultado.
4. Pie de Página (<footer>)
Contiene un mensaje de copyright.
Contenido del CSS (styles.css)
El archivo CSS define el estilo visual de la página web:

Fondo:

Imagen de fondo fija que cubre toda la pantalla.
Estilo del Contenedor del Título:

Centración del contenido con posición relativa.
Imagen con tamaño fijo y un título con sombra.
Navegación:

Menú de navegación centrado, con enlaces estilizados y efecto hover.
Columnas de Contenido:

Dos columnas con un diseño responsivo y estético.
Uso de colores y sombras para resaltar el contenido.
Tabla:

Estilo para la tabla de sagas, con bordes y celdas con padding.
Suma de Poderes:

Contenedor centrado con campos de entrada y un botón estilizado.
Pie de Página:

Pie de página con color de fondo y texto centrado.
Funcionalidad del JavaScript (script.js)
El archivo JavaScript contiene una función para sumar los valores de dos campos de entrada y mostrar el resultado:

javascript
Copiar código
function sumarPoderes() {
    var poder1 = parseInt(document.getElementById("poder1").value);
    var poder2 = parseInt(document.getElementById("poder2").value);
    var resultado = poder1 + poder2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
Cómo Usar
Abrir la página web:

Abrir index.html en un navegador web para visualizar la página.
Navegar por la información:

Usar la barra de navegación para moverse entre las diferentes secciones.
Sumar poderes:

Ingresar valores en los campos de "Suma de poderes" y presionar el botón para ver el resultado.
