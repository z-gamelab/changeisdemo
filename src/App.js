import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/images?_width=380")
      .then((response) => response.json())
      .then((jsonData) => setApiData(jsonData.data))
      .catch((error) => console.log(error));
  }, [])
  
  return (
    <>
      {apiData.map((aData, index) => (
        <>
          <h1>New Record: {index}</h1>
          <p>URL: {aData.url}</p>
          <p>Title: {aData.title}</p>
          <p>Description: {aData.description}</p>
        </>
      ))}
    </>
  );
}

export default App;
