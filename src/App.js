import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Edit } from "./Components/Edit/Edit.js";
import { AddContacts } from "./Pages/AddContacts";
import { MainPage } from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <div id="container">
        <BrowserRouter>
          <Routes>
            {" "}
            <Route path="/" element={<Navigate to="/contacts" replace />} />
            <Route path="/" element={<MainPage />}>
              <Route path="contacts" element={<AddContacts />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
