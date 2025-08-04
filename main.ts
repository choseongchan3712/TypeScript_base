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