export function SearchIndex(props) {
  return (
    <div>
      <h2>Searches</h2>
      {props.searchResults.map((search) => (
        <div key={search}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">{search.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price Level(1-4): {search.price_level}</li>
              <li className="list-group-item">User Rating: {search.rating}</li>
              <li className="list-group-item">Total User Ratings: {search.user_ratings_total}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
