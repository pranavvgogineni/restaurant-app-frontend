import { SavedSearchIndex } from "./SavedSearchIndex";
export function Content() {
  const savedSearches = [
    {
      id: 1,
      user_id: 1,
      radius: 100,
      city: "Brookfield",
      state: "Wisconsin",
      zip: 53045,
      price_range: 2,
      cuisine: "Italian",
    },
  ];
  return (
    <div>
      <SavedSearchIndex savedSearches={savedSearches} />
    </div>
  );
}
