import { useEffect, useState } from 'react';
import { useRequestApi } from '../../hooks';
import { Nav, Header, NoResults, Card, Menu } from '../../components';
import { IRequestInfoProps } from 'utils/InterfaceSet';
import { METHOD_LIST, MATERIAL_LIST } from '../../utils/ConstantsSet';
import { DashboardStyle } from 'assets/styles';

const { Container, Grid } = DashboardStyle;
const apiParams = { url: '/requests', method: 'GET', params: {} };
const showMenu = false;

export default function Dashboard() {
  const [data, setData] = useState<Array<IRequestInfoProps>>([]);
  const [params, setParams] = useState(Object);
  const [showMethod, setShowMethod] = useState<boolean>(false);
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const [methodArr, setMethodArr] = useState<number[]>([]);
  const [materialArr, setMaterialArr] = useState<number[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);

  const { response, onApiRequest } = useRequestApi(apiParams);

  useEffect(() => {
    if (!response) return;
    setData(response.data);
  }, [response]);

  function onClick(type: string) {
    switch (type) {
      case 'method':
        setShowMethod(!showMethod);
        setShowMaterial(showMaterial && !showMaterial);
        break;
      case 'material':
        setShowMaterial(!showMaterial);
        setShowMethod(showMethod && !showMethod);
        break;
      case 'toggle':
        if (!isClick) {
          setParams({ ...params, status: '상담중' });
          onApiRequest({
            ...apiParams,
            params: { ...params, status: '상담중' },
          });
        } else {
          delete params.status;
          setParams(params);
          onApiRequest({ ...apiParams, params: params });
        }
        setIsClick(!isClick);
        break;
      case 'refresh':
        setMethodArr([]);
        setMaterialArr([]);
        setParams({});
        setShowMaterial(false);
        setShowMethod(false);
        break;
      default:
        break;
    }
  }

  function onChange(type: string, idxNum: number) {
    let newArr: number[];
    let newParams: {};
    switch (type) {
      case 'method':
        newArr = checkItemSetting(methodArr, idxNum);
        newParams = requestParamsSetting(type, newArr, METHOD_LIST);
        setMethodArr(newArr);
        setParams(newParams);
        onApiRequest({ ...apiParams, params: newParams });
        break;
      case 'material':
        newArr = checkItemSetting(materialArr, idxNum);
        newParams = requestParamsSetting(type, newArr, MATERIAL_LIST);
        setMaterialArr(newArr);
        setParams(newParams);
        onApiRequest({ ...apiParams, params: newParams });
        break;
      case 'toggle':
        if (isClick) {
          newParams = { ...params, status: '상담중' };
          setParams(newParams);
          onApiRequest({ ...apiParams, params: newParams });
        } else {
          newParams = { ...params, status: '' };
          delete params.status;
          setParams(params);
          onApiRequest({ ...apiParams, params: newParams });
        }
        break;
      default:
        break;
    }
  }

  function checkItemSetting(itemArr: number[], idxNum: number): number[] {
    let newArr: number[];
    if (itemArr.includes(idxNum)) {
      newArr = itemArr.filter((e) => e !== idxNum).sort();
    } else {
      newArr = [...itemArr, idxNum];
      newArr.sort();
    }
    return newArr;
  }

  function requestParamsSetting(
    type: string,
    itemArr: number[],
    itemList: string[]
  ) {
    if (itemArr.length) {
      const tempArr: string[] = itemArr.reduce((acc: string[], value) => {
        acc.push(itemList[value]);
        return acc;
      }, []);

      return { ...params, [`${type}`]: tempArr.join() };
    } else {
      delete params[type];
      return params;
    }
  }

  const headerProps = {
    showMethod,
    showMaterial,
    methodArr,
    materialArr,
    onChange,
    onClick,
  };

  return (
    <>
      <Nav />
      <Container>
        <Header {...headerProps} />
        <Grid>
          {data.map((data: IRequestInfoProps) => (
            <Card key={data.id} data={data} />
          ))}
        </Grid>
        {!data.length && <NoResults />}
        {showMenu && <Menu />}
      </Container>
    </>
  );
}
