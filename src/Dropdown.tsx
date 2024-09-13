import { ChangeEvent } from 'react';

interface Props {
    option: string;
    onChange: (option: string) => void;
}

export function Dropdown(props: Props) {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <div>
            <select value={props.option} onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <p />
        </div>
    )
}