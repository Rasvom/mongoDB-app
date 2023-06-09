const Student = require("../models/Student.model");

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find({}).then((data) => res.json(data));
  },
  createStudents: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then(() => {
      res.json("Студент добавлен");
    });
  },
  deleteStudent: (req, res) => {
    Student.findByIdAndRemove(req.body.id).then(() => {
      res.json("Студент удален");
    });
  },
  patchStudent: (req, res) => {
    Student.findByIdAndUpdate(req.body.id, { name: `${req.body.name}` }).then(res.json("все нормально все хорошо"));
  },
};
