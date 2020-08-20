import React from "react";
import { TextField } from "./components/TextField";

function App() {
  return (
    <div className="App">
      <TextField
        text="hello"
        ok={true}
        i={5}
        fn={(bob) => bob}
        obj={{ firstName: "dustin", lastName: "irving" }}
        // handleChange={(e) => {}}
      />
    </div>
  );
}

export default App;
