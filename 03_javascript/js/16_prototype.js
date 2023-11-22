/**
 * javascript는 prototype기반의 상속모델을 제공
 * - prototype객체가 부모역할을 수행
 */
const test1 = () => {
    const cars = [];
    cars.push(new Car("그랜져"));
    cars.push(new Car("소나타"));
    cars.push(new Car("카니발"));

    console.log(cars);

    cars.forEach((car) => car.move());
};

function Car(name) {
    this.name = name;
    // this.move = function() {
    //     console.log(`${this.name}이/가 이동합니다. `);
    // };
}

Car.prototype.move = function() {
    console.log(`${this.name}이/가 이동합니다. `);
};

/**
 * Car를 상속하는 Trunk
 * - capacity 적재량
 * 
 * 상속구현
 * 1. 부모생성자 호출 apply
 * 2. 프로토타입 객체 생성 Object.create
 * 3. 프로토타입 객체 생성자함수 연결 
 */
const test2 = () => {
    const bongo = new Truck('봉고', 1_000);
    console.log(bongo)
    bongo.move;
};

function Truck(name, capacity) {
    // 1. 부모생성자 호출 - 현재객체 기준으로 Car 생성자함수 호출 (super 대신)
    Car.apply(this, [name]);

    this.capacity = capacity;
};

// 2. 프로토타입 객체 생성 
// 전달한 객체를 상속하는 객체를 생성
// (바로 Object 참조하게 되면 Car.prototype을 모름) - create
Truck.prototype = Object.create(Car.prototype);

// 3. 프로토타입 객체 생성자함수 연결
Truck.prototype.constructor = Truck;

/**
 * this binding 함수
 * - apply(this객체, [...params]) 호출
 * - call(this객체, ...params) 호출
 * - bind(this객체) 바인딩 후 함수 반환
 */
const test3 = () => {
    const foo = function(a, b){
        // this = window
        console.log(this.id, a + b);
    };
    foo(); // undefined NaN

    const obj = {
        id : 'honggd1234'
    };
    // foo.apply(obj, [10, 20]); // honggd1234 30
    // foo.call(obj, 10, 20); // honggd1234 30

    const foo2 = foo.bind(obj);
    foo2(10, 20); // honggd1234 30
};

/**
 * Book
 * - title 책제목
 * - author 저자
 * - price 가격
 * - info메소드 : 책제목/저자/가격 출력
 * 
 * Novel
 * - Book 속성전부
 * - type 소설종류 (연애 | SF | 심리 | 서정) 
 * - read(이름) : ${누가} ${책제목}(${타입})을 읽는다~ 🕋
 */
const test4 = () => {
    const books = [];
    books.push(new Novel('자바', '홍길동', 30_000, '연애'));
    books.push(new Novel('C언어', '신사임당', 25_000, 'SF'));
    books.push(new Novel('자바스크립트', '이순신', 30_000, '심리'));

    books.forEach((book) => {
        book.info();
        book.read('아무개');
    })
};

function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
};

Book.prototype.info = function() {
    console.log(`${this.title} / ${this.author} / ${this.price}`);
};

Novel.prototype = Object.create(Book.prototype);
Novel.prototype.constructor = Novel;

function Novel(title, author, price, type) {
    Book.apply(this, [title, author, price]);
    this.type = type;
}; 

Novel.prototype.read = function(name) {
    console.log(`${name}이/가 ${this.title}(${this.type})을 읽는다~ 🕋`);
};

/**
 * prototype 체인 
 * - 생성객체에 작성된 속성이 있으면 이걸 먼저 사용
 * - 그 다음에는 프로토객체에 작성된 속성을 사용
 * - 생성자함수에 작성된 속성은 static
 * 
 * - 생성자함수객체
 * - 프로토객체
 * - 생성객체 new연산자 호출결과
 */
const test5 = () => {
    // A
    // A.prototype
    // new A()

    const a = new A();
    console.log(a.id);
    a.hello();

    // static
    console.log(A.id);
    A.hello();
};

function A() {
    this.id = '가나다'
    this.hello = function() {
        console.log('안녕');
    }
}

A.prototype.id = 'ABC';
A.prototype.hello = function() {
    console.log('HELLO');
}

// 함수객체에 직접 속성등록 (static)
A.id = 'xxxx';
A.hello = function() {
    console.log('xxx');
}