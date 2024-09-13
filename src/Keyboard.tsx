interface Props {
    value: number;
    onChange: (value: number) => void;
    onClear: () => void;
}

export function Keyboard(props: Props) {
    return (
        <div>
            <input type="text" value={props.value} readOnly />
            <p />
            <div>
                <button onClick={() => props.onChange(1)}>1</button>
                <button onClick={() => props.onChange(2)}>2</button>
                <button onClick={() => props.onChange(3)}>3</button>
            </div>
            <div>
                <button onClick={() => props.onChange(4)}>4</button>
                <button onClick={() => props.onChange(5)}>5</button>
                <button onClick={() => props.onChange(6)}>6</button>
            </div>
            <div>
                <button onClick={() => props.onChange(7)}>7</button>
                <button onClick={() => props.onChange(8)}>8</button>
                <button onClick={() => props.onChange(9)}>9</button>
                <button onClick={() => props.onChange(0)}>0</button>
            </div>
            <button onClick={props.onClear}>Clear</button>
            <p />
        </div>
    )
}