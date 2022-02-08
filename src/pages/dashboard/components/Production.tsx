import React from 'react';
import styled from 'styled-components';

const DATA = {
  requests: [
    {
      id: 1,
      title: '자동차 시제품 제작',
      client: 'A 고객사',
      due: '2020.12.14',
      count: 2,
      amount: 100,
      method: ['밀링', '선반'],
      material: ['알루미늄'],
      status: '대기중',
    },
    {
      id: 2,
      title: '비행기 시제품 제작',
      client: 'B 고객사',
      due: '2020.12.13',
      count: 2,
      amount: 100,
      method: ['선반'],
      material: ['탄소강', '강철'],
      status: '상담중',
    },
    {
      id: 3,
      title: '기차 시제품 제작',
      client: 'C 고객사',
      due: '2020.12.12',
      count: 1,
      amount: 20,
      method: ['선반'],
      material: ['구리'],
      status: '대기중',
    },
    {
      id: 4,
      title: '자전거 시제품 제작',
      client: 'D 고객사',
      due: '2020.12.11',
      count: 1,
      amount: 45,
      method: ['선반'],
      material: ['스테인리스강'],
      status: '대기중',
    },
    {
      id: 5,
      title: '헬리콥터 시제품 제작',
      client: 'E 업체',
      due: '2020.12.10',
      count: 2,
      amount: 2,
      method: ['밀링'],
      material: ['알루미늄', '탄소강'],
      status: '대기중',
    },
    {
      id: 6,
      title: '전동 킥보드 시제품 제작',
      count: 1,
      client: 'F 업체',
      due: '2020.12.09',
      docs: 1,
      amount: 20,
      method: ['밀링'],
      material: ['강철'],
      status: '대기중',
    },
  ],
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  margin-top: 32px;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    padding: 23px 15px;
    border: 2px solid #2196f3;
  }
`;

const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Client = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`;

const DueDate = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
  margin-bottom: 16px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 32px;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
  margin-bottom: 8px;
`;

const Category = styled.span`
  font-weight: normal;
  width: 70px;
  margin-right: 32px;
`;

const Content = styled.span`
  font-weight: bold;
`;

const Communicating = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;

const CommunicateBlueButton = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  background: #2196f3;
  border-radius: 4px;
  padding: 6px 12px;
  margin-right: 8px;
`;

const CommunicateWhiteButton = styled(CommunicateBlueButton)`
  color: #2196f3;
  background: #ffffff;
  border: 1px solid #2196f3;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounselingList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Consultation = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ffa000;
  padding: 2px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  border: 1px solid #ffa000;
  justify-content: center;
`;

export default function Production() {
  return (
    <Container>
      {DATA &&
        DATA.requests.map((item) => (
          <ProductInfoBox>
            <Wrapper>
              <CounselingList>
                <Title>{item.title}</Title>
                {item.status === '상담중' && (
                  <Consultation>{item.status}</Consultation>
                )}
              </CounselingList>
              <Client>{item.client}</Client>
              <DueDate>{item.due}까지 납기</DueDate>
              <Line />
              <CategoryBox>
                <Category>도면개수</Category>
                <Content>{item.count}개</Content>
              </CategoryBox>
              <CategoryBox>
                <Category>총 수량</Category>
                <Content>{item.amount}개</Content>
              </CategoryBox>
              <CategoryBox>
                <Category>가공방식</Category>
                <Content>{item.method.toString()}</Content>
              </CategoryBox>
              <CategoryBox>
                <Category>재료</Category>
                <Content>{item.material.toString()}</Content>
              </CategoryBox>
            </Wrapper>
            <Communicating>
              <CommunicateBlueButton>요청 내역 보기</CommunicateBlueButton>
              <CommunicateWhiteButton>채팅 하기</CommunicateWhiteButton>
            </Communicating>
          </ProductInfoBox>
        ))}
    </Container>
  );
}
