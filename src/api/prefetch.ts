import { queryClient } from "./queryClient";

export const preFetchQuery = async(queryKey: string, queryFunction: any) => {
    await queryClient.prefetchQuery(queryKey, queryFunction);
}