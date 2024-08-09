import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DetailedCard from "@components/DetailedCard/DetailedCard";
import Loader from "@components/Loader/Loader";
import { IResult } from "@components/ResultsList/interfaces";
import "./style.css";

function DetailedPage() {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState<IResult>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (planetId) doSearch(planetId);
  }, [planetId]);

  const navigateTo = (val: number) => () => navigate(val);

  const doSearch = (request: string) => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/planets/?search=${request}`)
      .then((response) => {
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
        <button onClick={navigateTo(-1)}>Close</button>
        {loading ? <Loader /> : <DetailedCard result={planet} />}
      </div>
      <div className="overlay" onClick={navigateTo(-1)}></div>
    </div>
  );
}

export default DetailedPage;