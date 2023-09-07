import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { SavedSearchIndex } from "./SavedSearchIndex";
import { SavedSearchNew } from "./SavedSearchNew";
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
      <Signup />
      <Login />
      <LogoutLink />
      <SavedSearchNew onCreateSavedSearches={handleCreateSavedSearches} />
      <SavedSearchIndex savedSearches={savedSearches} />
    </div>
  );
}
