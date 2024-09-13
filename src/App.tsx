import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { Keyboard } from './Keyboard';



export function App() {

  const [inputValue1, setInputValue1] = useState<number>(0);
  const [inputValue2, setInputValue2] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('+');
  const [result, setResult] = useState<number>(0);

  const handleClick1 = (value: number): void => {
    setInputValue1(Number(`${inputValue1}${value}`));
    setResult(0);
  };

  const handleClear1 = (): void => {
    setInputValue1(0);
    setResult(0);
  };

  const handleClick2 = (value: number): void => {
    setInputValue2(Number(`${inputValue2}${value}`));
    setResult(0);
  };

  const handleClear2 = (): void => {
    setInputValue2(0);
    setResult(0);
  };

  const handleOptionChange = (option: string): void => {
    setSelectedOption(option);
  }

  const handleResult = (value1: number, value2: number) => {
    if (selectedOption === "+") { setResult(value1 + value2); }
    else if (selectedOption === "-") { setResult(value1 - value2); }
    else if (selectedOption === "*") { setResult(value1 * value2); }
    else if (selectedOption === "/") { setResult(value1 / value2); }
  };

  return (
    <div>
      <Keyboard value={inputValue1} onChange={handleClick1} onClear={handleClear1} />
      <Dropdown option={selectedOption} onChange={handleOptionChange} />
      <Keyboard value={inputValue2} onChange={handleClick2} onClear={handleClear2} />
      <p />

      {/*-----------------------------------------------------------*/}

      <div>
        <button onClick={() => handleResult(inputValue1, inputValue2)} >=</button>
        <p>{result}</p>
      </div>
    </div>
  );
}