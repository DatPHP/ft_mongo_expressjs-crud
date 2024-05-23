const express = require('express') ;
const { createCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse }   = require('../controllers/course');

const router = express.Router();
router.post('/courses', createCourse);
router.get('/courses', getAllCourse);
router.get('/courses/:courseId', getSingleCourse);
router.patch('/courses/:courseId', updateCourse);
router.delete('/courses/:courseId', deleteCourse);

module.exports = router;
