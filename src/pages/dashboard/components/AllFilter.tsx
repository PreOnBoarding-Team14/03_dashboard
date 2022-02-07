import { refresh } from 'assets/img';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormFilter from './FormFilter';
import Toggle from './Toggle';

const FilterBox = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FilterReset = styled.div`
  font-size: 20px;
  margin-left: 16px;
  color: #2196f3;
  margin-top: 8px;
`;

const Img = styled.img`
  margin-right: 12px;
  height: 16px;
`;

export default function AllFilter() {
  const [check, setCheck] = useState(false);
  const onClick = () => {
    setTimeout(() => {
      setCheck(true);
    }, 100);
    setTimeout(() => {
      setCheck(false);
    }, 200);
  };
  return (
    <FilterBox action="/requests" method="get">
      <FormWrapper>
        <FormFilter
          title="가공방식"
          name="method"
          data={['밀링', '선반']}
          check={check}
        />
        <FormFilter
          title="재료"
          name="material"
          data={['알루미늄', '탄소강', '구리', '합금강', '강철']}
          check={check}
        />
        <FilterReset onClick={onClick}>
          <Img src={refresh} />
          필터링 리셋
        </FilterReset>
      </FormWrapper>
      <Toggle />
    </FilterBox>
  );
}
