/*
    Phần 1
    Đối tượng Date
        trả về tgian hiện tại
*/

//cách 1: đây là một object
var date = new Date();
//console.log(date);

//Lấy tgian
var year = date.getFullYear();
var month = date.getMonth() + 1; //bắt đầu từ 0
var day = date.getDate();

console.log(`ngày tháng năm:`);
console.log(`${day}/${month}/${year}`);


// //cách 2: đây là một string
// var date2 = Date();
// console.log(date2);


//________________________________________________________________________________________________________________

/*
    Phần 2
    Lệnh rẽ nhánh If else
*/
if (month === 2) {
    console.log(`Hôm nay là tháng 2`);
} else if (month === 3) {
    console.log(`Hôm nay là tháng 3`);
} else if (month === 4) {
    console.log(`Hôm nay là tháng 4`);
} else if (month === 8) {
    console.log(`Hôm nay là tháng 8`);
} else {
    console.log(`k biết`);
}

function run(a) {
    if (a % 3 === 0 && a % 5 !== 0) {
        return 1;
    } else if (a % 5 === 0 && a % 3 !== 0) {
        return 2;
    } else if (a % 15 === 0) {
        return 3;
    }
}

console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3



//________________________________________________________________________________________________________________

/*
    Phần 3
    Lệnh rẽ nhánh Switch
*/
switch (month) {
    case 2: //month === 2
        console.log(`Hiện tại đang là tháng 2`);
        break;
        //phải có break vì nếu kh có cái này thì nó sẽ chạy cả những cái phía dưới, khác với if else sẽ dừng lại khi nó chạy câu lệnh đầu tiên
    case 3:
    case 4:
    case 5:
        console.log(`Hiện tại đang là tháng 3`);
        break;
    case 8:
        console.log(`Hiện tại đang là tháng 8`);
        break;
    default:
        console.log(`k biết`);
}