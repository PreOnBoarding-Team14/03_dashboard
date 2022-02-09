import { Toggle } from 'components';
import { METHOD_LIST, MATERIAL_LIST } from '../utils/ConstantsSet';
import { GRAY_ARROW, WHITE_ARROW, REFRESH } from '../assets/images/index';
import HeaderStyle from 'assets/styles/HeaderStyle';

const {
  Title,
  SubTitle,
  DropDownWrapper,
  InnerFlex,
  RightInnerFlex,
  BigDropDown,
  SmallDropDown,
  DropDownTitle,
  Arrow,
  DropDownCount,
  CheckBoxContainer,
  FilterReset,
  CheckBoxWrapper,
  CheckBox,
  Img,
} = HeaderStyle;

interface IProps {
  showMethod: boolean;
  showMaterial: boolean;
  methodArr: number[];
  materialArr: number[];
  onClick: (type: string) => void;
  onChange: (type: string, idxNum: number) => void;
}

export default function Header({
  showMethod,
  showMaterial,
  methodArr,
  materialArr,
  onClick,
  onChange,
}: IProps) {
  return (
    <>
      <Title>들어온 요청</Title>
      <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
      <DropDownWrapper>
        <InnerFlex>
          <BigDropDown Back={showMethod} onClick={() => onClick('method')}>
            <DropDownTitle>
              가공방식
              {methodArr.length > 0 && (
                <DropDownCount>({methodArr.length})</DropDownCount>
              )}
            </DropDownTitle>
            <Arrow
              src={showMethod ? WHITE_ARROW : GRAY_ARROW}
              alt="드롭 다운 화살표"
            />
          </BigDropDown>
          <SmallDropDown
            Back={showMaterial}
            onClick={() => onClick('material')}
          >
            <DropDownTitle>
              재료
              {materialArr.length > 0 && (
                <DropDownCount>({materialArr.length})</DropDownCount>
              )}
            </DropDownTitle>

            <Arrow
              src={showMaterial ? WHITE_ARROW : GRAY_ARROW}
              alt="드롭 다운 화살표"
            />
          </SmallDropDown>
          {(materialArr.length > 0 || methodArr.length > 0) && (
            <FilterReset onClick={() => onClick('refresh')}>
              <Img src={REFRESH} />
              필터링 리셋
            </FilterReset>
          )}
        </InnerFlex>
        <RightInnerFlex>
          <Toggle toggleClick={() => onClick('toggle')} />
        </RightInnerFlex>
      </DropDownWrapper>
      {showMethod && (
        <CheckBoxContainer>
          {METHOD_LIST.map((e, i) => (
            <CheckBoxWrapper key={i}>
              <CheckBox
                type="checkbox"
                id="scales"
                name="scales"
                defaultChecked={methodArr.includes(i)}
                onClick={() => onChange('method', i)}
              />
              <label htmlFor="scales">{e}</label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxContainer>
      )}
      {showMaterial && (
        <CheckBoxContainer style={{ marginLeft: '105px' }}>
          {MATERIAL_LIST.map((e, i) => (
            <CheckBoxWrapper key={i}>
              <CheckBox
                type="checkbox"
                id="scales"
                name="scales"
                defaultChecked={materialArr.includes(i)}
                onClick={() => {
                  onChange('material', i);
                }}
              />
              <label htmlFor="scales">{e}</label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxContainer>
      )}
    </>
  );
}
