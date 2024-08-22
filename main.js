//Object trong JS

//Phần thứ 1
var myInfo = {
    name: 'Xun Hiep',
    age: 20,
    address: 'HCM'
};

myInfo.email = 'xuanhiep0881888@gmail.com'; //thêm một ptu ở bên ngoài
myInfo['xun-hiep'] = 'hiepdeptrai'; //dừng ngoặc để có thể sử dụng các ký tự bên ngoài như dấu ngoặc ngang

var myKey = 'age';


//In phần tử
console.log(myInfo);
// name: 'Xun Hiep',
// age: 20
//address: 'HCM'
console.log(myInfo.name); //Xun Hiep
console.log(myInfo['xun-hiep']); //hiepdeptrai

console.log(myInfo["myKey"]); //20


//Xóa phần tử
delete myInfo.age;
// name: 'Xun Hiep',
//address: 'HCM'


//Phần thứ 2
var myInfo2 = {
    name: 'Xun Hiep',
    age: 20,
    address: 'HCM',
    getName: function() { //một function có tên là getName
        return this.name; //this = myInfo2
    }
};

console.log(myInfo2.getName);

//Function --> phương thức / method
//Others --> thuộc tính / property