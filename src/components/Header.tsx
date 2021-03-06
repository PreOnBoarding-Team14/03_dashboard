import { useState, useEffect } from 'react';
import { GRAY_ARROW, WHITE_ARROW, REFRESH } from '../assets/images/index';
import HeaderStyle from 'assets/styles/HeaderStyle';
import { Method, Material, Toggle } from 'components';

interface IProps {
  params: {
    method?: string | undefined;
    material?: string | undefined;
    status?: string | undefined;
  };
  setParams: React.Dispatch<
    React.SetStateAction<{
      method?: string | undefined;
      material?: string | undefined;
      status?: string | undefined;
    }>
  >;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export default function Header({ params, setParams, setShowMenu }: IProps) {
  const [showMethod, setShowMethod] = useState<boolean>(false);
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const [method, setMethod] = useState<number[]>([]);
  const [material, setMaterial] = useState<number[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);

  const toggleClick = () => {
    setIsClick(!isClick);
  };

  const methodClick = () => {
    setShowMethod((curr) => !curr);
    if (showMaterial) {
      setShowMaterial(false);
    }
  };

  const materialClick = () => {
    setShowMaterial((curr) => !curr);
    if (showMethod) {
      setShowMethod(false);
    }
  };

  const isRefreshClick = () => {
    setMethod([]);
    setMaterial([]);
    setShowMaterial(false);
    setShowMethod(false);
  };

  function onChangeMethod(i: number) {
    if (method.includes(i)) {
      const arr = method.filter((e) => e !== i);
      arr.sort();
      setMethod(arr);
    } else {
      const arr = [...method];
      arr.push(i);
      arr.sort();
      setMethod(arr);
    }
  }

  function onChangeMaterial(i: number) {
    if (material.includes(i)) {
      const arr = material.filter((e) => e !== i);
      arr.sort();
      setMaterial(arr);
    } else {
      const arr = [...material];
      arr.push(i);
      arr.sort();
      setMaterial(arr);
    }
  }

  useEffect(() => {
    if (method.length) {
      const temp = [];
      for (let el of method) {
        temp.push(Method[el]);
      }
      const param = temp.toString();
      setParams({
        ...params,
        method: param,
      });
    } else {
      delete params.method;
      setParams({ ...params });
    }
  }, [method]);

  useEffect(() => {
    if (material.length) {
      const temp = [];
      for (let el of material) {
        temp.push(Material[el]);
      }
      const param = temp.toString();
      setParams({
        ...params,
        material: param,
      });
    } else {
      delete params.material;
      setParams({ ...params });
    }
  }, [material]);

  useEffect(() => {
    if (isClick) {
      setParams({
        ...params,
        status: '?????????',
      });
    } else {
      delete params.status;
      setParams({ ...params });
    }
  }, [isClick]);

  return (
    <>
      <Title>????????? ??????</Title>
      <SubTitle>?????????????????? ??? ?????? ???????????? ???????????????.</SubTitle>
      <DropDownWrapper>
        <InnerFlex>
          <BigDropDown Back={showMethod} onClick={methodClick}>
            <DropDownTitle>
              ????????????
              {method.length > 0 && (
                <DropDownCount>({method.length})</DropDownCount>
              )}
            </DropDownTitle>
            <Arrow
              src={showMethod ? WHITE_ARROW : GRAY_ARROW}
              alt="?????? ?????? ?????????"
            />
          </BigDropDown>
          <SmallDropDown Back={showMaterial} onClick={materialClick}>
            <DropDownTitle>
              ??????
              {material.length > 0 && (
                <DropDownCount>({material.length})</DropDownCount>
              )}
            </DropDownTitle>

            <Arrow
              src={showMaterial ? WHITE_ARROW : GRAY_ARROW}
              alt="?????? ?????? ?????????"
            />
          </SmallDropDown>
          {(material.length > 0 || method.length > 0) && (
            <FilterReset onClick={isRefreshClick}>
              <Img src={REFRESH} />
              ????????? ??????
            </FilterReset>
          )}
        </InnerFlex>
        <RightInnerFlex>
          <Toggle toggleClick={toggleClick} />
        </RightInnerFlex>
      </DropDownWrapper>
      {showMethod && (
        <CheckBoxContainer>
          {Method.map((e, i) => (
            <CheckBoxWrapper key={i}>
              <CheckBox
                type="checkbox"
                id="scales"
                name="scales"
                defaultChecked={method.includes(i)}
                onClick={() => onChangeMethod(i)}
              />
              <label htmlFor="scales">{e}</label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxContainer>
      )}
      {showMaterial && (
        <CheckBoxContainer style={{ marginLeft: '105px' }}>
          {Material.map((e, i) => (
            <CheckBoxWrapper key={i}>
              <CheckBox
                type="checkbox"
                id="scales"
                name="scales"
                defaultChecked={material.includes(i)}
                onClick={() => {
                  onChangeMaterial(i);
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
