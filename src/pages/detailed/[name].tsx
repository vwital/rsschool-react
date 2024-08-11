import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailedCard from "@components/DetailedCard/DetailedCard";
import Loader from "@components/Loader/Loader";
import { IResult } from "@components/DetailedCard/interfaces";
import styles from "./style.module.css";

function DetailedPage() {
  const router = useRouter();
  const { name } = router.query;
  const [planet, setPlanet] = useState<IResult | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      axios
        .get(`https://swapi.dev/api/planets/${name}`)
        .then((response) => {
          setPlanet(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetch data: ", error);
          setLoading(false);
        });
    }
  }, [name]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles["detailed-page"]}>
      <div className={styles["detailed-info"]}>
        <button onClick={() => router.back()}>Close</button>
        {loading ? <Loader /> : <DetailedCard result={planet} />}
      </div>
      <div className={styles.overlay} onClick={() => router.back()}></div>
    </div>
  );
}

export default DetailedPage;
