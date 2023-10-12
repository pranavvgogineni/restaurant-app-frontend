import { Map, Marker } from "pigeon-maps";

export function MyMap(props) {
  const latitude = props.searchResults[0]?.geometry?.location.lat || 43.104;
  const longitude = props.searchResults[0]?.geometry?.location.lng || -80.104;
  const isLoaded = props.isLoaded || false;
  console.log(props.searchResults[0]?.geometry?.location);
  console.log("Google API response", props.searchResults[0]);
  return (
    <div>
      {isLoaded ? (
        <Map height={300} defaultCenter={[latitude, longitude]} defaultZoom={11}>
          {props.searchResults.map((search) => (
            <Marker
              key={search.name}
              width={30}
              anchor={[search.geometry.location.lat, search.geometry.location.lng]}
            />
          ))}
        </Map>
      ) : (
        <></>
      )}
    </div>
  );
}
