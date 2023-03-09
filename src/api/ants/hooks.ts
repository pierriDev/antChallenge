import { useQuery } from "react-query";
import { getAnts } from "./requests";

export const useGetAnts = () => useQuery<any, Error>('getAnts', getAnts);