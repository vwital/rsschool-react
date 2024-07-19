import Loader from "@components/Loader/Loader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailedCard from "@components/DetailedCard/DetailedCard";
import axios from "axios";
import { IResult } from "@components/ResultsList/interfaces";
import "./index.css";

function DetailedPage() {
  const { planetId } = useParams();
  console.log(planetId);
  const [planet, setPlanet] = useState<IResult>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (planetId) doSearch(planetId);
  }, [planetId]);

  const doSearch = (request: string) => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/planets/?search=${request}`)
      .then((response) => {
        console.log(response.data.count);
        const searchResults = response.data.results[0];
        setPlanet(searchResults);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };
  return (
    <div className="detailed-page">
      <div className="detailed-info">
        <button onClick={() => navigate(-1)}>Close</button>
        {loading ? <Loader /> : <DetailedCard result={planet} />}
      </div>
      <div className="overlay" onClick={() => navigate(-1)}></div>
    </div>
  );
}

export default DetailedPage;
