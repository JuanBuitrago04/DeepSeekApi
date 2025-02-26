# DeepSeek Chat Application 🌐💬

Welcome to DeepSeek! This is an interactive chat application that uses the DeepSeek API to provide intelligent and useful responses to users. This project was created to demonstrate how an artificial intelligence API can be integrated into a modern web application.

## Table of Contents 📚

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)

## Project Description 📝

DeepSeek is a chat application that allows users to interact with an artificial intelligence model to get answers to their questions. The application is designed to be easy to use and provides an attractive and responsive user interface.

## Technologies Used 🛠️

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend:**
  - Node.js
  - Express.js
  - OpenAI API

- **Others:**
  - Vercel (for deployment)
  - Dotenv (for environment variable management)
  - Body-parser (for parsing JSON in HTTP requests)

## Installation 🛠️

Follow these steps to install and run the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JuanBuitrago04/DeepSeekApi.git
   cd DeepSeekApi
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

## Configuration ⚙️

1. **Configure environment variables:**

   Create a `.env` file in the `backend` directory and add your DeepSeek API key:
   ```properties
   DEEPSEEK_API_KEY=your_api_key_here
   ```

2. **Start the server:**
   ```bash
   cd backend
   npm start
   ```

3. **Open the frontend:**
   Open the `index.html` file in your preferred browser.

## Project Structure 📂

The project structure is as follows:

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

## Usage 🚀

1. **User Interface:**
   - When the page loads, an explanatory modal will appear with instructions on how to use the application.
   - Type your message in the input field and press the send button (➤) to send your message.
   - Press the clear button (✖) to clear the conversation.

2. **API Interaction:**
   - The application will send your message to the DeepSeek API and display the response in the conversation area.

## Contributions 🤝

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b my-new-branch
   ```
3. **Make your changes and commit:**
   ```bash
   git commit -m "Description of my changes"
   ```
4. **Push your changes to the remote repository:**
   ```bash
   git push origin my-new-branch
   ```
5. **Open a pull request.**

## License 📄

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact 📧

If you have any questions or suggestions, feel free to contact me:

- **Email:** [juanbuitrago04@gmail.com](mailto:juanbuitrago04@gmail.com)
- **GitHub:** [JuanBuitrago04](https://github.com/JuanBuitrago04)

---

Thank you for visiting DeepSeek! We hope you enjoy using our chat application. 😊✨
