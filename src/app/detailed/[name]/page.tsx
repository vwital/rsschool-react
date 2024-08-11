"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DetailedCard from "@components/DetailedCard/DetailedCard";
import Loader from "@components/Loader/Loader";
import { IResult } from "@components/DetailedCard/interfaces";
import styles from "./style.module.css";

function DetailedPage({ params }: { params: { name: string } }) {
  const router = useRouter();
  const { name } = params;
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
        .catch(() => {
          setLoading(false);
          throw new Error("error fetching planet data");
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
        <DetailedCard result={planet} />
      </div>
      <div className={styles.overlay} onClick={() => router.back()}></div>
    </div>
  );
}

export default DetailedPage;
