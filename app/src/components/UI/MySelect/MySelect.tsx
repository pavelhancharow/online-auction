import { FC, SyntheticEvent } from 'react';
import { MySelectBox } from './MySelectStyles';

interface MySelectProps {
  select: string;
  options: { link: string; text: string; disabled?: boolean }[];
  handleChange: (e: SyntheticEvent<HTMLSelectElement>) => void;
}

export const MySelect: FC<MySelectProps> = ({
  select,
  options,
  handleChange,
}): JSX.Element => {
  return (
    <MySelectBox value={select} onChange={handleChange}>
      {options.map((opt) => (
        <option key={opt.link} value={opt.link} disabled={opt.disabled}>
          {opt.text}
        </option>
      ))}
    </MySelectBox>
  );
};
