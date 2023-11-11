import React, { useState } from "react";
import "./InputRange.css";

type InputRangeProps = {};

const InputRange: React.FC<InputRangeProps> = () => {
  const [value, setValue] = useState<number>(1600);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        className="input-range"
        value={value}
        min={1600}
        max={3800}
        onChange={handleChange}
      />
      <div className="range-bottom">
        <div>1600</div>
        <div>3800</div>
      </div>
    </div>
  );
};

export default InputRange;
