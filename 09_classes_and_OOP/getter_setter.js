class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    // return this._password.toUpperCase()
    return `${this._password}jaynish`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }

  get email() {
    return this._email.toLowerCase();
  }
  set email(value) {
    this._email = value;
  }
}
const jaynish = new User("Jaynish@123","12345xyzabc")
console.log(jaynish.password);
console.log(jaynish.email);
