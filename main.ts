// ? node 설치: npm init

// ? 타입스크립트 설치: npm install --seva-dev typescript

// ? tsconfig.json 설치: npx tsc --init

// ? npm run build 를 실행하기 위해: "build":"tsc"

// ? npm start 를 실행하기 위해: "start":"node main.js"

console.log('Hello TypeScript')

// ! 1. 타입을 정하는 법
let size: number = 100;
size = 105;


// ! 2. 기본형
let itemName: string = '블랙 후드';
let itemPrice: number = 129000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;


// ! 3. 배열과 튜플

// ? (1) 배열
const cart: string[] = [];
cart.push('c001');
cart.push('c002');

const carts: string[][] = [
    ['c001', 'c002'],
    ['c003'],
];

// ? (2) 튜플
let mySize: [number, number] = [167, 28];
let mySize_02: [number, number, string] = [167, 28, 'M'];


// ! 4. 객체 타입
let product: {
    id: string;
    name: string;
    price: number;
    membersOnly?: boolean;
    // * 옵셔널 프로퍼티
    sizes: string[];
} = {
    id: 'c001',
    name: '블랙 후디',
    price: 129000,
    membersOnly: true,
    sizes: ['M', 'L', 'XL'],
};

// ? 프로퍼티 이름에 변수 사용 시:
let stock: {
    [id: string]: number;
} = {
    c001: 3,
    c002: 0,
    c004: 1,
};