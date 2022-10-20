export interface ICat {
  id?: number;
  name: string;
  age: string | undefined;
  color: string;
  nature: 'depends' | 'aggressive' | 'calm';
}
