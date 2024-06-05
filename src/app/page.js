import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Map from "./components/Map";

const getProperties = async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("Endpoint is not set");
  }

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "gcms-stage": "PUBLISHED",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        propertyS {
          beds
          description
          images {
            fileName
            url
          }
          location {
            latitude
            longitud
          }
          name
          rentalPrice
          slug
          id
        }
      }
      `,
    }),
  });
  const json = await response.json();
  return json.data.properties;
};

export default async function Home() {
  const properties = await getProperties();
  console.log(properties);
  return (
    <>
      <NavBar />
      <SearchBar />
      <main>
        <article>
          <Map />
        </article>
        <article className="listings">
          <h2>Rental Listings</h2>
          <div className="card-container">
            <Card />
          </div>
        </article>
      </main>
    </>
  );
}
