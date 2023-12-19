import React from "react";
import { MyString, MyNumber, MyBoolean, MyObject, MyFunction } from "types";
import "../App.css";

const MyComponent: React.FC = () => {
  // Declare variables with type annotations
  const myString: MyString = "Hi everyone I am Raunak and I wear jersey #";
  const myNumber: MyNumber = 7;
  const myBoolean: MyBoolean = true;

  // Declare an object with the specified type
  const myObject: MyObject = {
    name: "Kurt Kobain",
    age: 29,
    isActive: true,
  };

  const myFunction: MyFunction = (param1: String, param2: String) => {
    const result: MyObject = {
      name: param1,
      age: param2,
      isActive: true,
    };
    return result;
  };

  const functionResult: MyObject = myFunction("Lionel Messi", 35);
  console.log(myObject);
  console.log(functionResult);
  return (
    <div>
      <p>{myString}</p>
      <p>{myNumber}</p>
      <p>{myBoolean.toString()}</p>
      <p>{JSON.stringify(myObject)}</p>
      <p>{JSON.stringify(functionResult)}</p>
    </div>
  );
};

export default MyComponent;
