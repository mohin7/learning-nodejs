class Students{
  constructor(){
    this.students = [];
  }

  getAllStudent(){
    return this.students;
  }

  getStudentById(id){
    return this.students.find(student => student.id === id);
  }

  createStudent(student){
    student.id = this.students.length + 1;
    this.students.push(student);
    return student;
  }

  updatedStudentById(id,updatedStudent){
    let index = this.students.findIndex(student => student.id === id);
    this.students[index].name = updatedStudent.name || this.students[index].name
    this.students[index].phone = updatedStudent.phone || this.students[index].phone
    this.students[index].email = updatedStudent.email || this.students[index].email
    return this.students[index];
  }

  deleteStudentById(id){
    let index = this.students.findIndex(student => student.id === id);
    let deletedStudentObj = this.students[index]
    this.students = this.students.filter(student => student.id !== id);
    return deletedStudentObj;
  }
}

module.exports = new Students;