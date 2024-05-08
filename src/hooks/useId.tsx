import { useState, useEffect } from 'react';
import { makeRequest } from '../makeRequest';

type HookParams = {
  id: string;
};

const useId = ({ id }: HookParams) => {
  const [petitionData, setPetitionData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await (makeRequest.get as (url: string) => Promise<any>)(
          `/api/petitions/?id=${id}`
        );
        setPetitionData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  return { petitionData };
};

export default useId;
