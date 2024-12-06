'use client'
import { useEffect, useState } from "react";
import TableView from "@/components/Table";

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const result = await response.json();
      setCoins(result);
    };

    fetchData();
  }, []);

  return (
    <TableView coins={coins} />
  );
}
