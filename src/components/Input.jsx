import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState('default value')

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h3>{value}</h3>
      <input 
        type='text'
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
}

export default Input;
