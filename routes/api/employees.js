const express = require('express');
const { getAllEmployees, createNewEmployee, updateEmpoyee, deleteEmployee, getEmployee } = require('../../controllers/employeesController');

const router = express.Router();

router.route('/')
  .get(getAllEmployees)
  .post(createNewEmployee)
  .put(updateEmpoyee)
  .delete(deleteEmployee);

router.route('/:id')
  .get(getEmployee)



module.exports = router;