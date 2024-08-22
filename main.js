//Object constructor

//Bản thiết kế
function User(firstName, lastName, avatar) { //Tạo ra một bản thiết kế, dùng để mô tả đối tượng có những gì
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() { //this = User
        return `${this.firstName} ${this.lastName}`; //this = getName - khai bao ở đâu thì nó sẽ là đối tượng đó
    }
}
//Cách khai báo thứ 2
var User2 = function(firstName, lastName, avatar) { //Tạo ra một bản thiết kế, dùng để mô tả đối tượng có những gì
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

//đối tượng 
var author = new User('Xun', 'Hiep', 'Avatar');
var user = new User('kitu', 'Tuyen', 'Avatar');

//Thêm phương thức riêng cho từng đối tượng (giống môn OOP vl :v )
author.title = 'chia sẻ dạo tại F8';
user.comment = "Liệu có khóa asp.net k ad =))";

//In
console.log(author.getName());
console.log(user.getName());

console.log(author);
console.log(user);