/*
    Object prototype - Basic
    là nguyên liệu để tạo nên ngôi nhà

    1.Prototype là gì
    nguyên mẫu - là cái khuôn
    2.Sử dụng khi nào
*/
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.first} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
//prototype nó thêm thuộc tính bên ngoài hàm tạo User( cái khung chính )
//dùng cho đặt thuộc tính cho tất cả các thằng
User.prototype.getClassName = function() { //phương thức
    return this.className;
}

var user = new User('xun', 'hiep', 'avatar 1');
//muốn truyền vào trực tiếp như này thì nó phải nằm trong thằng chính và sử dụng 'this'

console.log(user.className);
console.log(user);
console.log(user.getClassName());