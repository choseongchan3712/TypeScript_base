"use strict";
// ? node 설치: npm init
Object.defineProperty(exports, "__esModule", { value: true });
// ? 타입스크립트 설치: npm install --seva-dev typescript
// ? tsconfig.json 설치: npx tsc --init
// ? npm run build 를 실행하기 위해: "build":"tsc"
// ? npm start 를 실행하기 위해: "start":"node main.js"
console.log('Hello TypeScript');
// ! 1. 타입을 정하는 법
let size = 100;
size = 105;
// ! 2. 기본형
let itemName = '블랙 후드';
let itemPrice = 129000;
let membersOnly = true;
let owner = undefined;
let seller = null;
// ! 3. 배열과 튜플
// ? (1) 배열
const cart = [];
cart.push('c001');
cart.push('c002');
const carts = [
    ['c001', 'c002'],
    ['c003'],
];
// ? (2) 튜플
let mySize = [167, 28];
let mySize_02 = [167, 28, 'M'];
// ! 4. 객체 타입
let product = {
    id: 'c001',
    name: '블랙 후디',
    price: 129000,
    membersOnly: true,
    sizes: ['M', 'L', 'XL'],
};
// ? 프로퍼티 이름에 변수 사용 시:
let stock = {
    c001: 3,
    c002: 0,
    c004: 1,
};
//# sourceMappingURL=main.js.map