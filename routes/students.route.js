const { Router } = require("express");
const { studentsController } = require("../controllers/students.controller");

const router = Router();

router.get("/students", studentsController.getStudents);
router.post("/students", studentsController.createStudents);
router.delete("/students/:id", studentsController.deleteStudent);
router.patch("/students/:id", studentsController.patchStudent);

module.exports = router;
