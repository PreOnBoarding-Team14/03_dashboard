import axios from 'axios';

interface IArgsProps {
  url: string;
  method: string;
  params?: object;
}

class HttpUtil {
  async requestApi(args: IArgsProps) {
    function getApi(url?: string, method?: string, params?: object) {
      const body: object = {
        url: !url ? '/requests' : url,
        method: !method ? 'GET' : method,
      };

      // baseURL 옵션을 변경하거나 package.json 의 proxy 옵션을 넣어주면 됨.
      return axios({
        baseURL: 'https://dashboard-12313.herokuapp.com/',
        ...body,
        params: !params ? {} : params,
      })
        .then((res) => res)
        .catch((err) => err.response);
    }

    const response = await getApi(args.url, args.method, args.params);
    let msg: string = '';

    if (!response) msg = '데이터를 로드 할 수 없습니다.';
    if (response.status !== 200)
      msg =
        '네트워크 통신 중 오류가 발생했습니다. 오류 코드 : [' +
        response.status +
        ']';

    return { data: response, msg };
  }
}

export default new HttpUtil();
