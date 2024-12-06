import { DataType } from "@/types/DataType";

const fetchData = async (): Promise<DataType[]> =>{
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');

    //ensure connection ok
    if(!res.ok){
        throw new Error("Failed to fetch Data")
    }

    const data: DataType[] = await res.json()

    return data;
}

export default fetchData;