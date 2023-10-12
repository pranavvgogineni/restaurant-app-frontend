import axios from "axios";
export function SearchIndex(props) {
  const handleSaveSearch = (search) => {
    console.log(search);
    // event.preventDefault();
    // const params = new FormData(event.target);
    axios.post("http://localhost:3000/saved_searches", search).then((response) => {
      console.log("back end saved search response", response);
    });
  };
  return (
    <div>
      <h2>Searches</h2>
      {props.searchResults.map((search) => (
        <div key={search.place_id}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">{search.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price Level(1-4): {search.price_level}</li>
              <li className="list-group-item">User Rating: {search.rating}</li>
              <li className="list-group-item">Total User Ratings: {search.user_ratings_total}</li>
            </ul>
            <button onClick={() => handleSaveSearch(search)}>Save Search</button>
          </div>
        </div>
      ))}
    </div>
  );
}
