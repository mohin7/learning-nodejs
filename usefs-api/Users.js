class Users{
  constructor(){
    this.users = []
  }

  getAllUsers(){
    return this.users
  }
  getSingleUser(id){
    return this.users.find(user => user.id === id)
  }

  createUser(user){
    user.id = this.users.length + 1;
    this.users.push(user);
    return user; 
  }

  updateUser(id, newUser){
    let index = this.users.findIndex(user => user.id === id);
    this.users[index].name = newUser.name || this.users[index].name;
    this.users[index].email = newUser.email || this.users[index].email;
    this.users[index].phone = newUser.phone || this.users[index].phone;

    return this.users[index]
  }

  deleteUser(id){
    return this.users.filter(user => user.id !==id)
  }
}

module.exports = new Users;