export function SavedSearchIndex(props) {
  return (
    <div>
      <h1>All Saved Searches</h1>
      {props.savedSearches.map((savedSearch) => (
        <div key={savedSearch.id}>
          <p>
            {savedSearch.radius}, {savedSearch.city}, {savedSearch.state}, {savedSearch.zip}, {savedSearch.price_range},{" "}
            {savedSearch.cuisine}
          </p>
        </div>
      ))}
    </div>
  );
}
