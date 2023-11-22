// type 自定義函數
type AddFuc = (a: number, b: number) => number;

let addFunc: AddFuc = (n1: number, n2: number): number => {
  return n1 + n2;
};

// interface 自定義函數
interface AddFuncProps {
  (a: number, b: number): number;
}

let addFunc2: AddFuncProps = (n1: number, n2: number): number => {
  return n1 + n2;
};

export {};