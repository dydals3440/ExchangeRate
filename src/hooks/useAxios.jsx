import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response = await axios(url);
        console.log(response);
        setData(response.data);
        setError(null); // 에러가 없는 경우 에러 상태 초기화
      } catch (error) {
        setError(error);
        setData([]); // 에러가 발생한 경우 데이터 상태 초기화
      } finally {
        setLoaded(false);
      }
    };

    fetchData();
  }, []);

  return [data, error, loaded];
}
