import "./App.css";
import Quotes from "./Components/Quotes";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState("");
  const [showdata, setShowData] = useState();
  const [author, setAuthor] = useState();
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  const handleOnClick = () => {
    let rnum = Math.floor(Math.random() * data.length);
    setShowData(data[rnum].text);
    setAuthor(data[rnum].author);
  };

  return (
    <>
      <h1>Get your quote of the day</h1>
      <Quotes
        data={data}
        handleOnClick={handleOnClick}
        showdata={showdata}
        author={author}
      ></Quotes>
    </>
  );
}

export default App;
