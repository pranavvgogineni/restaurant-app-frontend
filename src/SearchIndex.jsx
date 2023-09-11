export function SearchIndex(props) {
  return (
    <div>
      <h2>Searches</h2>
      {props.searchResults.map((search) => (
        <div key={search}>
          <h3>{search.name}</h3>
          <p>Price Level(1-4): {search.price_level}</p>
          <p>User Rating: {search.rating}</p>
          <p>Total User Ratings: {search.user_ratings_total}</p>
        </div>
      ))}
    </div>
  );
}
