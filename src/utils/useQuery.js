import { useState, useEffect } from "react";

export function useQuery(fetchFunction, params = {}) {
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      if (fetchFunction) {
        try {
          setFetchState({ data: null, isLoading: true, error: null });
          const data = await fetchFunction(params);
          setFetchState({ data, isLoading: false });
        } catch (error) {
          setFetchState({
            data: null,
            isLoading: false,
            error: "The request has failed",
          });
        }
      }
    }

    fetchData();
  }, [fetchFunction, ...Object.values(params)]);

  return fetchState;
}
