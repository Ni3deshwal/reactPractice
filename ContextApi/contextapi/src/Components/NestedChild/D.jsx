import { useContext } from "react";
import ncContext from "./NCcontext";
function D() {
    const contextData = useContext(ncContext);
    console.log(contextData);

  return (
    <div
      style={{
        width: "500px",
        padding: "20px",
        margin: "50px auto",
        border: "1px solid teal",
      }}
    >
      <h1>D Component</h1>
      <dl>
        <dt>Name</dt>
        <dd>{"sourav"}</dd>
        <dt>City</dt>
        <dd>{"kolkata"}</dd>
      </dl>
    </div>
  );
}
export default D;
