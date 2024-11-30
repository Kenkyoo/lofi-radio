# Lofi Radio 24/7 🎧

Una estación de radio **Lofi** que transmite música relajante las 24 horas, ideal para trabajar, estudiar o relajarse. Incluye múltiples canales de YouTube para cambiar entre diferentes estilos de música Lofi y fondos dinámicos que se ajustan al ambiente.

## 🚀 Funcionalidades

- **Cambio de canales**: Selecciona entre varios canales Lofi en YouTube con un solo clic.
- **Reproductor personalizado**:
  - Reproduce, pausa o detén la música.
  - Control de reproducción desde la interfaz.
- **Fondos dinámicos**: Cambia el fondo aleatoriamente cada vez que seleccionas un canal o presionas el botón.
- **Animación visual**: Incluye una barra de sonido animada para un toque estético.
- **Interfaz simple y elegante**: Diseño enfocado en la experiencia del usuario.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura principal de la página.
- **CSS3**: Animaciones y estilos.
- **JavaScript**: Lógica para la integración con YouTube y cambio de fondos.
- **YouTube IFrame API**: Controla la reproducción de videos de YouTube directamente en la página.

## 📦 Cómo Usarlo

1. Clona este repositorio y asegúrate de tener un servidor local configurado (ej. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code).
2. Abre el archivo `index.html` en tu navegador.
3. Selecciona un canal de la lista de radios y disfruta de la música Lofi.
4. Cambia el fondo o controla la reproducción con los botones disponibles.

## 🎨 Personalización

1. **Añadir más videos**:
   - Agrega el ID de nuevos videos de YouTube a la constante `videos` en `app.js`.
2. **Cambiar fondos**:
   - Coloca nuevas imágenes en la carpeta `images` y actualiza la lista en la constante `images`.
3. **Ajustar el tamaño del reproductor**:
   - Modifica las propiedades `height` y `width` en el objeto `YT.Player` en el archivo `app.js`.

## 🌟 Características Adicionales

- **Fondos animados**: Compatibilidad con GIFs para un diseño más inmersivo.
- **Experiencia fluida**: Cambia de canal sin interrupciones en la música.

## 📄 Licencia

Este proyecto está bajo la licencia [MIT License](https://opensource.org/licenses/MIT).

