import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { Keyboard } from './Keyboard';



export function App() {

  const [inputValue1, setInputValue1] = useState<number>(0);
  const [inputValue2, setInputValue2] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const handleClick1 = (value: number): void => {
    setInputValue1(Number(`${inputValue1}${value}`));
  };

  const handleClear = (): void => {
    setInputValue1(0);
    setInputValue2(0);
    setIsFirst(true);
    setIsCalculated(false);
  };

  const handleClick2 = (value: number): void => {
    setInputValue2(Number(`${inputValue2}${value}`));
    if (isCalculated) {
      setInputValue1(value);
      setInputValue2(0);
      setIsFirst(true);
      setIsCalculated(false);
    }
  };

  const handleOptionChange = (option: string): void => {
    setSelectedOption(option);
    setIsFirst(false);
  }

  const handleResult = (value1: number, value2: number) => {
    if (selectedOption === "+") { setResult(value1 + value2); }
    else if (selectedOption === "-") { setResult(value1 - value2); }
    else if (selectedOption === "*") { setResult(value1 * value2); }
    else if (selectedOption === "/") { setResult(value1 / value2); }
    setIsCalculated(true);
  };

  return (
    <div>
      <Keyboard
        value={isFirst ? inputValue1 : inputValue2}
        prefix={isFirst ? '' : `${inputValue1}` + selectedOption}
        suffix={isCalculated ? `=${result}` : ''}
        onChange={isFirst ? handleClick1 : handleClick2}
        onClear={handleClear}
      />
      <Dropdown onClick={handleOptionChange} />
      <p />

      {/*-----------------------------------------------------------*/}

      <div>
        <button onClick={() => handleResult(inputValue1, inputValue2)} >=</button>
      </div>
    </div>
  );
}