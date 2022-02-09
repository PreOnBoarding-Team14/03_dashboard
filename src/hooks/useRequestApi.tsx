import { useEffect, useState } from 'react';
import { IRequestInfoProps, IRequestParamsProps } from '../utils/InterfaceSet';
import { HttpUtil } from '../utils';

interface IResponseProps {
  data: Array<IRequestInfoProps>;
  msg: string;
}

export default function useRequestApi(args: IRequestParamsProps) {
  const [requestParams, setRequestParams] = useState(args);
  const [response, setResponse] = useState<IResponseProps>();

  useEffect(() => {
    const getData = async () => {
      const res = await HttpUtil.requestApi(requestParams);
      const { msg, data } = res;

      if (!!msg) return;

      setResponse(data);
    };
    getData();
  }, [requestParams]);

  function onApiRequest(params: IRequestParamsProps) {
    setRequestParams(params);
  }

  return { response, onApiRequest };
}
