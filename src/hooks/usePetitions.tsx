import { useState, useEffect } from 'react';
import { makeRequest } from '../makeRequest';
type HookParams = {
  endpoint: string;
  segment?: string;
};

export const usePetitions = ({ endpoint, segment }: HookParams) => {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${endpoint}?${segment}`;
        let res = await (makeRequest.get as (url: string) => Promise<any>)(url);
        setPetitions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [endpoint, segment]);
  return { petitions };
};
