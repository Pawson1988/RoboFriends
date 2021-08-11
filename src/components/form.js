import React, {useState} from "react";

function Form() {

const [input1, setInput1] = useState("nothing here.....");
const [input2, setInput2] = useState("nothing here.....");
const [input3, setInput3] = useState("nothing here.....");

const inputField1 = (e) => {
    setInput1(e.target.value)
}
const inputField2 = (e) => {
    setInput2(e.target.value)
}
const inputField3 = (e) => {
    setInput3(e.target.value)
}

  return (
    <div>
      <form>
        <label id="firstName">First Name:</label>
        <input onChange={inputField1} type="text" id="firstname" name="firstName" required />
        <label id="lastName">Last Name:</label>
        <input onChange={inputField2} type="text" id="lastName" name="lastName" required />
        <label id="age">Age:</label>
        <input onChange={inputField3} type="number" id="age" name="age" required />
        <button>Submit</button>
      </form>
      <p>{input1}</p>
      <p>{input2}</p>
      <p>{input3}</p>
    </div>
  );
}

export default Form;
