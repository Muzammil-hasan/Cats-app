export interface ICat {
  id?: number;
  name: string;
  age: number | string;
  color: string;
  nature: 'depends' | 'aggressive' | 'calm';
}
