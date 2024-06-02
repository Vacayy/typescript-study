const obj1: object = {
    name: 'jay',
    age: 20,
}

// obj2에서 이렇게 타입 지정해도 obj1과 동일함
const obj2: {} = { 
    name: 'jay',
    age: 20,
}

// 이를 이용해서 다음과 같이 속성들의 타입들도 명시적 할당 가능. 
const obj3: {
    name: string,
    age: number,
} = {
    name: 'jay',
    age: 20,
}

/* 
그러나 객체는 obj2 와 같이 TS가 알아서 추론하도록 하는 것이 더 효율적이라고 강의에서는 말함.
정답은 없는듯?
*/


const arr1: number[] = [1, 2, 3]; // 굿
const arr2: number[] = [1, 2, 'A']; // 에러. 컴파일은 됨.
const arr: any[] = [3, 'A']; // 가능
const arr3: Array<number> = [1, 2]

// Object
let obj: { 
	name: string, 
	age: number 
} = { 
    name: "John", 
    age: 25 
};


/*
enum 타입: 사용자정의 타입으로, 특정 상태들을 저장해놓고 싶을 때 사용
*/

enum Role {Admin, ReadOnly, Author}; // enum 타입인 Role 선언
console.log(Role.Admin); // 0. enum 타입 사용
console.log(Role.Author); // 2. enum 타입 사용