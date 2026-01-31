import "./style.css";
import UseLocalStorage from "./UseLocalStorage";

function Theme() {
  const [value, setValue] = UseLocalStorage("theme", "light");

  function handleTheme() {
    setValue(value === "light" ? "dark" : "light");
  }

  return (
    <div className="container light-dark-mode" data-theme={value}>
      <div>
        <p>Local Storage Usage</p>
        <p>
          This project uses Local Storage to store the user’s selected theme
          (light / dark) in the browser. A custom React hook (useLocalStorage)
          is implemented to save the theme value whenever it changes and
          retrieve it when the application loads. This ensures that the selected
          theme persists even after refreshing the page or reopening the
          browser, improving user experience and maintaining UI consistency.
        </p>
      </div>
      <h3>Current Theme : <i>{value}</i></h3>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}

export default Theme;
