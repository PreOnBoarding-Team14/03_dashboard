export interface IRequestInfoProps {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string> | string;
  material: Array<string> | string;
  status: string;
}

export interface IParamsProps {
  method: string;
  material: string;
  status: string;
}

export interface IRequestParamsProps {
  url: string;
  method: string;
  params: object | IParamsProps;
}
