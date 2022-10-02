const student = require('./modules/studentConstructor')
const listSt = require('./modules/students')

const Class = {
  name: 'React JS',
  passingGrade: 6,
  maxAbsence: 10,
  students: listSt,

  addStudent(name, absence, rating) {
    this.students.push(new student(name, absence, rating))
    console.log(`Aluno ${name} adicionado`)
  },

  approved(student) {
    if (student.average() >= this.passingGrade && student.absence < this.maxAbsence) {
      console.log(`Aluno ${student.name} aprovado`)
      return true
    } else if (student.absence === this.maxAbsence && student.average() >= (this.passingGrade * 1.1)) {
      console.log(`Aluno ${student.name} aprovado`)
      return true
    } else {
      console.log(`Aluno ${student.name} reprovado`)
      return false
    }
  },

  allApproved(students) {
    students.map((student) => {
      const name = student.name
      const aprroved = this.approved(student)
      return console.log({
        name,
        aprroved
      })
    })
  }
}

Class.addStudent('Antônio Nunes', 3, [10, 10, 10])

Class.approved(listSt[0])

Class.allApproved(listSt)