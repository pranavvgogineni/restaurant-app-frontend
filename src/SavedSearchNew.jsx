import axios from "axios";
export function SavedSearchNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/saved_searches", params).then((response) => {
      console.log(params);
      console.log("back end saved search response", response);
    });
    props.onCreateSavedSearches(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Search</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Radius: <input name="radius" type="integer" />
        </div>
        <div>
          City: <input name="city" type="text" />
        </div>
        <div>
          State: <input name="state" type="text" />
        </div>
        <div>
          Zip: <input name="zip" type="integer" />
        </div>
        <div>
          Price Range(1-4): <input name="price_range" type="integer" />
        </div>
        <div>
          Cuisine: <input name="Italian" type="text" />
        </div>
        <button type="submit">Create photo</button>
      </form>
    </div>
  );
}
