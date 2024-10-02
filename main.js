//________________________________________________________________________________________________________________
/*
    Đệ Quy
        -luôn set điểm dừng cho nó
*/
//-------------------------------------------
//Các ví dụ về đệ quy

//vd 1
function deQuy(num) {
    if (num<0) {
        //dừng
        //...
        return;
    }
    deQuy;
}

deQuy(10);

//vd 2:
function countDown(num) {
    if(num>0) {
        //loop
        console.log(num);
        return countDown(num-1);
    }
    return num;
}
countDown(3);
// 3
// 2
// 

//vd 3:
//vòng lặp
function loop(start, end, cb) {
    if(start < end) {
        cb(start);
        return loop(start + 1, end,cb);
    }
}

//logic bản thân tự đặt ra
var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function(index){
    console.log(array[index]);
});

//Javascript
//PHP
//Ruby

//vd 4:
//6 * 5 * 4 * 3...*1 = 720
function giaiThua(num){
    var output = 1;
    for(var i=num; i>0 ;i--){
        output = output * num;
    }
    return output;
}

giaiThua(6) //720

//hoặc

function giaiThua(num) {
    if(num > 0) { //điểm dừng
        return num * giaiThua(num - 1); //logic để nó chạy
    }
    return 1;
}

console.log(giaiThua(6)); //720


//________________________________________________________________________________________________________________

/*
    Phần 2
    Làm việc với mảng - Array Methods:
    Tương tự với thằng for nhưng điểm cộng của nó là:
        - Ngắn gọn hơn
        - Dễ hiểu hơn nếu làm quen với nó
        - Được dùng nhiều hơn trong thực tế, tất cả những thằng này để phải truyền function vào trong nó
            courses.map(function() {
                //viết trực tiếp trong này
            });
*/
//-------------------------------------------

var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Java',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 120
    },
]

// 1.forEach(); - duyệt qua từng phần tử của mảng
courses.forEach(function(course, index){ //dấu chấm dùng để truy cập tới, còn dấu () nó là callBack.
    console.log(index, course);          //index là vị trí của phần tử trong mảng
}); 

// 2.every() - kiểm tra tất cả các phần tử có cùng 1 cái gì đó hay k
var isFree = courses.every(function(course, index){
    return console.coin === 0;
}); 

console.log(isFree); //False

// 3.some() - kiểm tra 1 ông trong mảng, ngược với every là tất cả phải đúng
var isFree = courses.some(function(course, index){
    return console.coin === 0;
}); 

console.log(isFree); //True

// 4.find -  tìm kiếm phần tử đầu tiên thỏa mãn
var course = courses.find(function(course, index){
    return console.name === 'Ruby';
}); 

console.log(course); //trả về phần tử Ruby được tìm thấy đầu tiên, nếu k thì undefined.

// 5.filter - tìm kiếm tất cả phần tử thỏa mãn
var listCourse = courses.filter(function(course, index){
    return console.name === 'Ruby';
}); 

console.log(listCourse); 

// vd 2: 
//Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số 
// (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport 
// sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.

function getMostFavoriteSport(arr) {

    return arr.filter(sports => sports.like > 5);
    
    }
//-------------------------------------------
// 6.Array map()
/*
    -Thường được dùng để render View trong Web và App
    
var newCourse = courses.map(function() {//mảng mới có số lượng tương đương với mảng cũ 
    //viết trực tiếp trong này
});

hoặc
*/

function courseHandler(course, index) { //index là cái key mà chúng ta đặt ra cho nó
    //console.log(course); //in ra tất cả các phần tử trong mảng
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses, //trả về mảng gốc - ít được sử dụng
    };
} 

var newCourse = courses.map(courseHandler); //courseHandler trả về cái gì thì newCourse sẽ nhận lại được chính cái đó

console.log(newCourse); //in ra y chang thứ mà thằng courseHandler return
//-------------------------------------------
// 7.reduce()
/*
    -Dùng khi muốn nhận về phần tử duy nhất sau khi đã tính toán trong mảng array()
    vd: muốn nhận về giá trị là tổng số coin các khóa học
*/
//dùng vòng lặp
var totalCoin = 0;

for(var course of courses) {
    total += course;
}

console.log(totalCoin);


//dùng reduce()

// var tongXU = courses.reduce(function() {
//     //xử lí
// });

var i = 0;

function xuLiXu (accumulator, currentValue, currentIndex, originArray ) { 
    //accumulator: biến lưu trữ
    //currentValue: giá trị hiện tại
    //currentIndex: chỉ mục, key
    //originArray: array gốc = courses
    i++;

    var tong = currentValue + accumulator;

    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue,
        'Tích trữ được: ': tong,
    });
    // console.log(currentValue);

    //return accumulator + currentValue.coin; //return cái gì thì thằng lưu trữ (accumlator) sẽ là cái đó
    return tong;
}

var tongXu = courses.reduce(xuLiXu, 0); //init: giá trị khởi tạo
//số '0' là giá trị khởi tạo được gán cho biến lưu trữ (accumulator) giống với 'totalCoin = 0' của vòng lặp for bên trên
//Mỗi lần nó lặp là nó sẽ gọi ptu 1 lần, số lần lặp dựa vào số phần tử có trong 'courses'.

console.log(tongXu);

 //Xóa hết những dòng ghi chú thì nó chỉ còn:
 var total = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
 }, 0);

 console.log(total);

 //Ngắn hơn nữa nếu bạn đã hiểu rõ về nó =))
 var total = courses.reduce((a,b) => a + b.coin, 0);

console.log(total);

//vd2:
var totalCoin = courses.reduce(function(total, course){ //tên total, course có thể đặt thoải mái
    return total + course.coin; //tính tổng số tiền khóa học và lưu vào biến lưu trữ total
},0) //initial value - giá trị khởi tạo
//gắn giá trị cho total, nếu k có số 0 thì nó sẽ lấy thằng đầu tiên trong mảng (ở đây nó là 1 object) làm giá trị khởi tạo
//và gắn thằng thứ 2 cho course
// => nên để số 0 vào tùy vào từng bài toán, gắn số 0 vào thì bạn sẽ nhận về kiểu giá trị number



//Bai tap 1: 
//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
//        -> đưa các mảng nhỏ vào thành 1 mảng tổng
var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem); //concat - nối mảng
}, []);
//initial value, lấy giá trị khởi tạo là một array trống để nó không lấy thằng đầu tiên làm giá trị khởi tạo

//console.log(flatArray);


//Bai tap 2:
//Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [ 
            { 
                id: 1,
                title: "HTML, CSS"
            },
            { 
                id: 2,
                title: "JS"
            },
        ]
    },
    {
        topic: "Back-end",
        courses: [ 
            { 
                id: 1,
                title: "NodeJS"
            },
            { 
                id: 2,
                title: "PHP"
            },
        ]
    },
];

var newCourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
}, [])

//console.log(newCourses);

//Dùng map() và HTML để render nó màn hình
var htmls = newCourses.map(function(course) {
    return `
        <div>   
            <h2>${course.title}</h2>
            <p>ID: ${course.title}</p>
        </div>
    `;
});

console.log(html.join(''));
    //-----------------------------------------------
    //Đi sâu hơn về reduce()

    const numbers = [1,2,3,4,5]

    const result1 = numbers.reduce((total, number) => {
        return total + number
    })

console.log(result1);

    //Thêm một phương thức mới vào prototype của Array
    Array.prototype.reduce2 = function (callback, result2) {
        let i=0
        if (arguments.lenth < 2) {//dùng khi không truyền initial value
            i = 1; // Nếu không có giá trị khởi tạo, bắt đầu từ phần tử thứ hai
            result2 = this[0]; // Dùng phần tử đầu tiên của mảng làm giá trị khởi tạo
        }
        for(; i < result2.lenth; i++) {
            result2 = callback(result2, this[i], i, this);// Gọi hàm callback cho mỗi phần tử
        }
        return result2
    }

    const result2 = numbers.reduce((total, number, index, array) => {
        return total + number
    }, 10)

    console.log(result2)

//đã coi tới 115 thời gian: 0