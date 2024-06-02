var sum = function (number1, number2) {
    return number1 + number2;
};
console.log(sum(4, 5));
var num1 = 3; // 문제 없음
var num2 = 3; // 명시적으로 type 지정. 권장
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["ReadOnly"] = 1] = "ReadOnly";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
; // enum 타입인 Role 선언
console.log(Role.Admin); // 0. enum 타입 사용
console.log(Role.Author); // 2. enum 타입 사용
