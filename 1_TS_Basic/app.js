var obj1 = {
    name: 'jay',
    age: 20,
};
// obj2에서 이렇게 타입 지정해도 obj1과 동일함
var obj2 = {
    name: 'jay',
    age: 20,
};
// 이를 이용해서 다음과 같이 속성들의 타입들도 명시적 할당 가능. 
var obj3 = {
    name: 'jay',
    age: 20,
};
/*
그러나 객체는 obj2 와 같이 TS가 알아서 추론하도록 하는 것이 더 효율적이라고 강의에서는 말함.
정답은 없는듯?
*/
var arr1 = [1, 2, 3]; // 굿
var arr2 = [1, 2, 'A']; // 에러
var arr = [3, 'A']; // 가능
