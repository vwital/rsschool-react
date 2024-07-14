// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./detailedPage.css";
// import { IResult } from "./interfaces";

// function DetailedPage() {
//   // const { id, name } = useParams<{ id: string; name: string }>();
//   const [result, setResult] = useState<IResult | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://swapi.dev/api/planets/${id}/`)
//       .then((response) => {
//         setResult(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError(error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading data</div>;
//   }

//   if (!result) {
//     return <div>No data found</div>;
//   }

//   return (
//     <ul className="detailed-list">
//       <li className="person-list">
//         <h3>{result.name}</h3>
//         <p>Rotation period: {result.rotation_period}</p>
//         <p>Orbital period: {result.orbital_period}</p>
//         <p>Diameter: {result.diameter}</p>
//         <p>Climate: {result.climate}</p>
//         <p>Gravity: {result.gravity}</p>
//         <p>Terrain: {result.terrain}</p>
//         <p>Surface water: {result.surface_water}</p>
//         <p>Population: {result.population}</p>
//       </li>
//     </ul>
//   );
// }

// export default DetailedPage;
