type MyString = string;
type MyNumber = number;
type MyBoolean = boolean;

type MyObject = {
  name: MyString;
  age: MyNumber;
  isActive: MyBoolean;
};

type MyFunction = (param1: MyString, param2: MyNumber) => MyObject;
