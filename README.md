# 🎬 React Movie Search App (JavaScript Mastery Clone)

This is a mobile-friendly **Movie Search App** built using **React.js**, inspired by the YouTube tutorial by *JavaScript Mastery*. The app fetches movie data from the **OMDb API** and displays results dynamically using React hooks and components.

> 🔗 Tutorial reference: [JavaScript Mastery - React App Build](https://www.youtube.com/watch?v=b9eMGE7QtTk&list=PLNr6y7fJuf_f9wCIPQTun4pMosf5e4fFk&index=1)  
> 📌 **This project runs locally and is meant for personal learning.**

---

## 🧰 Tools & Technologies

| Tool / Library   | Purpose                                   |
|------------------|-------------------------------------------|
| React.js         | Frontend framework                        |
| JSX              | HTML-like syntax for React components     |
| useState / useEffect | React hooks for state & lifecycle     |
| Fetch API        | Data fetching from OMDb API               |
| OMDb API         | Movie metadata provider                   |
| CSS (App.css)    | UI styling and layout                     |

---

## 🛠️ Installation & Setup

1. **Install Node.js**  
   ➤ https://nodejs.org/

2. **Set PowerShell permissions** (admin mode):
   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

3. **Create React App** in an empty folder:
   ```bash
   npx create-react-app ./
   ```

4. **Run the App**:
   ```bash
   npm start
   ```

---

## 📁 Folder Structure Overview

| File / Folder     | Description                                |
|-------------------|--------------------------------------------|
| `src/index.js`    | ReactDOM rendering entry point             |
| `src/App.js`      | Main logic for search, API, state, render  |
| `App.css`         | UI styles (provided by tutorial)           |
| `search.svg`      | Optional graphic (replaced with Enter key) |
| `MovieCard.js`    | Reusable component to render each movie    |

---

## 🚀 Features

- 🔍 **Search for movies** by title
- 📥 **Fetch results** from the OMDb API using async/await
- 💡 **Input with placeholder** and live onChange state updates
- ⌨️ **Enter key triggers search**
- 📦 **Render movie list** using `map()` from a state array
- 🔁 **React hooks** (`useState`, `useEffect`) for reactivity
- ✅ **Handles empty results** or no match gracefully
- 📱 **Mobile-friendly layout**

---

## 🔐 OMDb API Key Setup

1. Visit https://www.omdbapi.com/apikey.aspx
2. Register for a free API key
3. Replace the key in your fetch URL:

```js
const API_URL = `https://www.omdbapi.com/?apikey=YOUR_API_KEY`;
```

---

## 🧠 Key React Concepts Demonstrated

- **JSX templating** with embedded JavaScript in `{ }`
- **Props** to pass data between components
- **Functional components** over class-based ones
- **State management** with `useState`
- **Side effects** (API calls) with `useEffect`
- **Conditional rendering** for edge cases (no movie found)
- **Component reusability** and modular folder structure

---

## 📸 Screenshots (Optional)

> Add screenshots here of the final UI, search bar, and results.
![image](https://github.com/user-attachments/assets/23cc8229-aa71-4818-8deb-bee61dc731d9)
![image](https://github.com/user-attachments/assets/68c5991c-2c05-4cb5-b73e-3a2b43f9c124)


---

## 🧑‍💼 Author

**Yeo Chee En Luke**  

---

## 🎓 Acknowledgements

- Video tutorial by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
- OMDb API: [https://omdbapi.com](https://omdbapi.com)

---

## 📝 Final Notes

This project is **not deployed**, intended only for local experimentation and learning the React.js development flow. The project taught key fundamentals for building real-world React applications using API data, hooks, and reusable components.
a file call node_module is missing due to the amount of files

---
