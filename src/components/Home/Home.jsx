import { Button } from "react-bootstrap";
import Child from "./Child";
import { useState } from "react";

const Home = () => {
    const[increment, setIncrement] = useState(0);
  console.log("==Parent==");
  return (
    <>
    <Button variant="primary" onClick={() => setIncrement(increment + 1)}>Some</Button>
      <Child/>
    </>
  );
};

export default Home;
