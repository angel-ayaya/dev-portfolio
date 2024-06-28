# Substract Page

## Descripción

La página `substract-container` es un componente de React que muestra un video de fondo, sombras decorativas y contenido con un efecto de sustracción utilizando CSS. Esta página utiliza `styled-components` para los estilos y muestra una imagen junto con un mensaje de bienvenida.

## Características

- Video de fondo con reproducción automática, en bucle y silenciado.
- Sombras decorativas posicionadas alrededor del video.
- Contenido estilizado con "inverted border radius" para lograr un diseño único.
- Imagen decorativa junto con un mensaje de bienvenida.

## Instalación

1. Asegúrate de tener instalado Node.js y npm.
2. Clona este repositorio.
3. Navega al directorio del proyecto.
4. Instala las dependencias del proyecto:

```bash
npm install
Ejecuta la aplicación localmente:
bash
npm start
Uso del "Inverted Border Radius"
Para lograr el diseño único en el contenido, se utilizó una técnica conocida como "inverted border radius". Esto implica el uso de bordes redondeados invertidos para crear formas no convencionales. En este caso, se aplicaron bordes redondeados en diferentes esquinas de los elementos para obtener el efecto deseado.
```

Ejemplo de Código
```javascript
const Content = styled.div`
position: relative;
width: 100%;
height: 150px;
background-color: black;
border-radius: 15px;
border-top-left-radius: 0;

p {
position: absolute;
top: -10px;
left: 5px;
}

.first {
position: absolute;
left: -10px;
top: -80px;
height: 80px;
width: 138px;
background-color: black;
border: 10px solid black;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;
}

.second {
position: absolute;
top: -80px;
height: 160px;
width: 40%;
left: 80%;
background-color: cadetblue;
border: 10px solid black;
border-radius: 25px;
}

.second img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 15px;
}
`;
```
En este ejemplo, se puede ver cómo se aplicaron bordes redondeados invertidos (border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius) para crear un diseño único en los elementos .first y .second.

- Recursos Utilizados
- React
- styled-components
- Google Fonts
- Akali Image
- Background Video

## Créditos
Este proyecto fue desarrollado por Angel Ayaya. Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
