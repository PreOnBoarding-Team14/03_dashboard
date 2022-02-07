import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  margin-right: 8px;
`;

const Form = styled.div``;

const SelectBox = styled.legend`
  margin-top: 4px;
  padding: 16px 35px 6px 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #939fa5;
  border-radius: 4px;
`;

const Option = styled.option``;

const Arrow = styled.span`
  margin-right: 7px;
`;

const SelectContainer = styled.div<{ click: boolean }>`
  display: flex;
  border: 1px solid #939fa5;
  background-color: ${({ click }) => (click ? '#1565C0' : 'white')};
  color: ${({ click }) => (click ? 'white' : '#323D45')};
  font-weight: 500;
  padding: 9px 12px;
  border-radius: 4px;
  &:hover {
    border: 1px solid #2196f3;
  }
  i {
    color: ${({ click }) => (click ? 'white' : '#939fa5')};
  }
`;

const SelectTitle = styled.div`
  margin-right: 12px;
`;

const Input = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  &:checked {
    width: 18px;
    height: 18px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

interface IFormProps {
  title: string;
  data: string[];
  name: string;
  check: boolean;
}

function FormFilter({ title, data, name, check }: IFormProps) {
  const [click, setClick] = useState(false);
  const [some, setSome] = useState(['']);

  useEffect(() => {
    if (check === true) {
      setSome(['']);
      setClick(false);
    }
  }, [check]);
  const onOpenClick = () => {
    setClick((prev) => !prev);
  };
  const onFilterClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const text = e.currentTarget.value;
    setSome((old) => {
      if (some.length === 0) {
        return [text];
      }
      const findIndex = some.findIndex((item) => item === text);
      if (findIndex !== -1) {
        const newSome = [
          ...old.slice(0, findIndex),
          ...old.slice(findIndex + 1),
        ];
        return newSome;
      }
      const newSome = [...old, text];
      return newSome;
    });
  };
  return (
    <Conatiner>
      <Form>
        <SelectContainer click={click} onClick={onOpenClick}>
          <SelectTitle>{title}</SelectTitle>
          {some.length - 1 > 0 && (
            <SelectTitle>({some.length - 1})</SelectTitle>
          )}
          <Arrow>
            <i className="fas fa-caret-down"></i>
          </Arrow>
        </SelectContainer>
        {click && (
          <SelectBox>
            {data &&
              data.map((item) => (
                <Label key={item}>
                  <Input
                    type="checkbox"
                    value={item}
                    name={name}
                    defaultChecked={some.includes(item)}
                    onClick={(e) => onFilterClick(e)}
                  />
                  {item}
                </Label>
              ))}
          </SelectBox>
        )}
      </Form>
    </Conatiner>
  );
}

export default FormFilter;
