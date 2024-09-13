interface Props {
    onClick: (option: string) => void;
}

export function Dropdown(props: Props) {
    return (
        <div>
            <button onClick={() => props.onClick('+')}>+</button>
            <button onClick={() => props.onClick('-')}>-</button>
            <button onClick={() => props.onClick('*')}>*</button>
            <button onClick={() => props.onClick('/')}>/</button>
            <p />
        </div>
    )
}