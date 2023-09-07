import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { SavedSearchIndex } from "./SavedSearchIndex";
import { SavedSearchNew } from "./SavedSearchNew";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
export function Content() {
  const [savedSearches, setSavedSearches] = useState([]);

  const handleIndexSavedSearches = () => {
    console.log("handleIndexSavedSearches");
    axios.get("http://localhost:3000/saved_searches.json").then((response) => {
      console.log(response.data);
      setSavedSearches(response.data);
    });
  };

  const handleCreateSavedSearches = () => {
    console.log("handleCreateSavedSearches", params);
    axios.post("http://localhost:3000/saved_searches.json", params).then((response) => {
      setSavedSearches([...savedSearches, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexSavedSearches, []);

  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<LogoutLink />} />
        <Route
          path="/saved_searches/new"
          element={<SavedSearchNew onCreateSavedSearches={handleCreateSavedSearches} />}
        />
        <Route path="/saved_searches" element={<SavedSearchIndex savedSearches={savedSearches} />} />
        <Route path="/" element={<SavedSearchIndex savedSearches={savedSearches} />} />
      </Routes>
    </div>
  );
}
