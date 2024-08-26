const name = "John";
const age = 30;

// Sử dụng template literals với ${}
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // Output: "Hello, my name is John and I am 30 years old."


//________________________________________________________________________________________________________________
/*
    Phần 1
    Toán tử 3 ngôi (Ternary operator)
*/
var course = {
    name: 'Javascript',
    coin: 250,
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
//vế thứ nhất đúng thì nó sẽ lấy giá trị của vế thứ 1 sau dấu ? và vế thứ 2 cũng vậy
console.log(result); //250

var a = 1;
var b = 2;

var c = a > 0 ? a : b;
//chỉ nên dùng cho những trường hợp đơn giản vì nó dài vl =))

// Làm bài
function getCanVoteMessage(age) {
    return (age >= 18) ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}

console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'



//________________________________________________________________________________________________________________

/*
    Phần 2
    Vòng lặp Loop
        4. while - lặp khi điều kiện đúng
        5. do/while - chạy ít nhất 1 lần, và lặp khi điều kiện đúng
*/

//-------------------------------------------

//1. for - Lặp với điều kiện đúng
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//Tạo danh sách số ngẫu nhiên
function getRandomNumber(min, max, length) {
    const arr = [];

    for (var i = 1; i <= length; i++) {
        arr.push(Math.random() * (max - min) + min)
    }
    return arr
}
const a = getRandomNumber(1, 10, 5);
console.log(a);

//Tính tổng giá trị đơn hàng
var orders = [{
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },

    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },

    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(order) {
    var totalPrice = 0;
    for (var i = 0; i < length.orders - 1; i++) {
        totalPrice = +orders[i].price;
    }
    return totalPrice;
}

getTotal(orders) // Output: 8700000
console.log(totalPrice);

//-------------------------------------------

//2. for/in - Lặp qua key của đối tượng
//dùng để lấy key của đối tượng

var myInfo = { //kiểu dữ liệu là Object
    name: 'xun',
    age: 20,
    address: 'HCM'
}
for (var key in myInfo) { //key là cái tên tự đặt
    //Object bao nhiêu key thì nó chạy bấy nhiêu lần
    console.log(key);
    //name
    //age
    //address
    console.log(myInfo[key]);
    //xun
    //20
    //HCM
}


var languages = [
    'JS',
    'Java',
    'PHP'
]
for (var key in myInfo) { //key là cái tên tự đặt
    //Object bao nhiêu key thì nó chạy bấy nhiêu lần
    console.log(key);
    // 0
    // 1
    // 2
    console.log(languages[key]);
    // 'JS',
    // 'Java',
    // 'PHP'
}

function run(object) {
    var hiep = []
    for (var Yamada in object) {
        hiep.push("Thuộc tính " + Yamada + " có giá trị " + object[Yamada])
    }
    return hiep;
}
//Thuộc tính name có giá trị Tran Xuan Hiep
//thuộc tính age có giá trị 20

//-------------------------------------------

//3. for.of - Lặp qua value của đối tượng
for (var value of languages) {
    console.log(value);
    // 'JS',
    // 'Java',
    // 'PHP'
}

//dùng cho object thì nó sẽ khác một xíu
for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
    // xun
    //20
    //HCM
}

for (var value of Object.values(myInfo)) {
    console.log(value);
    //xun
    //20
    //HCM
}

//-------------------------------------------


//________________________________________________________________________________________________________________
