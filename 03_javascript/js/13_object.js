
/**
 * 객체 
 * - 속성(속성명 = 속성값)모음 
 * - 속성명 : 모든 타입. 문자열/식별자 추천
 * - 속성값 : 모든 타입
 */
const test1 = () => {
  // 리터럴로 생성
  const obj = {
    id : 'honggd',
    name : '홍길동',
    age : 33,
    married : true,
    hobby : ['게임', '독서', '먹방'],
    pet : {
      name : '구리구리' 
    },
    123 : 456,
    'user-name' : 'sinsa'
  };
  console.log(obj);

  // new연산자
  const obj2 = new Object();
  obj2.kor = 88;
  obj2.eng = 77;
  obj2.math = 55;
  console.log(obj2);

  // 속성접근 
  // 1. dot-notation
  // 2. bracket-notation
  console.log(obj.id);
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.hobby);
  console.log(obj.hobby[0]);
  console.log(obj.pet.name);
  // console.log(obj.123);
  // console.log(obj.user-name);

  // 문자열로 속성명 작성!!
  console.log(obj['id']);
  console.log(obj['name']);
  console.log(obj['age']);
  console.log(obj['hobby']);
  console.log(obj['hobby'][0]);
  console.log(obj['pet']['name']);
  console.log(obj[123]);
  console.log(obj['user-name']);

  // 존재하지 않는 속성을 참조
  console.log(obj.father); // undefined
  // console.log(obj.father.job()); // Uncaught TypeError: Cannot read properties of undefined (reading 'job')
  
  // 속성 추가
  obj.father = '홍명보';
  obj.father = '홍금보'; // override
  console.log(obj);

  // 속성값 제거
  obj.hobby = undefined;
  // 속성 제거
  delete obj.hobby;

}

/**
 * function (superset)
 * method (subset) 객체소속의 함수
 */
const test2 = () => {
  const user = {
    username : '홍길동', 
    // 메소드 : 객체의 속성타입이 함수인 경우
    run : function(){
      // this용법2. 객체메소드(일반함수) 안 this는 현재객체를 가리킨다.
      console.log(`${this.username}이/가 달린다~`);
    },
    // 메소드 단축문법(일반함수)
    eat(food){
      console.log(`${this.username}이/가 ${food}를 먹는다.`);
    },
    work: () => {
      // 객체안 화살표함수는 지양할 것.
      console.log(this); // window
      console.log(`${this.username}이/가 일한다~`);
    }
  };

  console.log(user.username);
  user.run();
  user.eat('🍖');

  user['run']();
  user['eat']('🥘');

  user.work();
};


/**
 * 관련된 함수를 전역에 선언하지 않고, 
 * 객체안에 선언하면, 객체를 namespace로 사용할 수 있다.
 */
const calculator = {
  plus(a, b){
    return a + b;
  },
  minus(a, b){
    return a - b;
  },
  multiply(a, b){
    return a * b;
  },
  divide(a, b){
    return a / b;
  },
  remainder(a, b){
    return a % b;
  }        
};
const test3 = () => {
  console.log(calculator.plus(10, 20));
  console.log(calculator.minus(10, 20));
  console.log(calculator.multiply(10, 20));
  console.log(calculator.divide(10, 20));
  console.log(calculator.remainder(10, 20));
};

/**
 * - for..in문 
 * - Object.keys()
 * - Object.values()
 */
const test4 = () => {
  const obj = {
    name : '청국장',
    price : 15_000,
    ingredients : ['청국장', '양파', '마늘', '파'],
  };

  // for..in
  for(prop in obj){
    console.log(prop, obj[prop]);
  }

  // Object.keys
  const keys = Object.keys(obj);
  console.log(keys);
  keys.forEach((key) => console.log(key, obj[key]));

  // Object.values
  const values = Object.values(obj);
  values.forEach(value => console.log(value));
};