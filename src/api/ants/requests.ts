import fetch, { combineRequestData } from "../fetch";

export const getAnts = () => fetch('/ants').then((result) => combineRequestData(result))