# DeepSeek Chat Application 🌐💬

¡Bienvenido a DeepSeek! Esta es una aplicación de chat interactiva que utiliza la API de DeepSeek para proporcionar respuestas inteligentes y útiles a los usuarios. Este proyecto fue creado para demostrar cómo se puede integrar una API de inteligencia artificial en una aplicación web moderna.

## Tabla de Contenidos 📚

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción del Proyecto 📝

DeepSeek es una aplicación de chat que permite a los usuarios interactuar con un modelo de inteligencia artificial para obtener respuestas a sus preguntas. La aplicación está diseñada para ser fácil de usar y proporciona una interfaz de usuario atractiva y responsiva.

## Tecnologías Utilizadas 🛠️

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend:**
  - Node.js
  - Express.js
  - OpenAI API

- **Otros:**
  - Vercel (para despliegue)
  - Dotenv (para gestión de variables de entorno)
  - Body-parser (para parseo de JSON en solicitudes HTTP)

## Instalación 🛠️

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/JuanBuitrago04/DeepSeekApi.git
   cd DeepSeekApi
   ```

2. **Instala las dependencias del backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Instala las dependencias del frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

## Configuración ⚙️

1. **Configura las variables de entorno:**

   Crea un archivo `.env` en el directorio `backend` y agrega tu clave de API de DeepSeek:
   ```properties
   DEEPSEEK_API_KEY=tu_clave_de_api_aquí
   ```

2. **Inicia el servidor:**
   ```bash
   cd backend
   npm start
   ```

3. **Abre el frontend:**
   Abre el archivo `index.html` en tu navegador preferido.

## Estructura del Proyecto 📂

La estructura del proyecto es la siguiente:

```
DeepSeekApi/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── controller.js
│   ├── package.json
│   ├── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
├── README.md
```

## Uso 🚀

1. **Interfaz de Usuario:**
   - Al cargar la página, aparecerá un modal explicativo con instrucciones sobre cómo usar la aplicación.
   - Escribe tu mensaje en el campo de entrada y presiona el botón de enviar (➤) para enviar tu mensaje.
   - Presiona el botón de limpiar (✖) para limpiar la conversación.

2. **Interacción con la API:**
   - La aplicación enviará tu mensaje a la API de DeepSeek y mostrará la respuesta en el área de conversación.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. **Fork el repositorio.**
2. **Crea una nueva rama:**
   ```bash
   git checkout -b mi-nueva-rama
   ```
3. **Realiza tus cambios y haz commit:**
   ```bash
   git commit -m "Descripción de mis cambios"
   ```
4. **Envía tus cambios al repositorio remoto:**
   ```bash
   git push origin mi-nueva-rama
   ```
5. **Abre una solicitud de pull.**

## Licencia 📄

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

## Contacto 📧

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Correo Electrónico:** [juanbuitrago04@gmail.com](mailto:juanbuitrago04@gmail.com)
- **GitHub:** [JuanBuitrago04](https://github.com/JuanBuitrago04)

---

¡Gracias por visitar DeepSeek! Esperamos que disfrutes usando nuestra aplicación de chat. 😊✨