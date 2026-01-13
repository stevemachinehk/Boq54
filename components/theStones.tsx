import { useEffect, useState } from 'react';

const theStones = () => {
  const [panelData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.arcmotion.co.uk/NashHouseNorth/NashHouseData.json');
        const json = await response.json(); // Parses the response as JSON
        setData(json);
      } catch (error) {
        console.error("Failed to fetch JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    panelData   
  );
};
export default theStones;
   