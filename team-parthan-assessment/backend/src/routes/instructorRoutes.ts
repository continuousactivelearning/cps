import express from 'express';
import { authorize } from '../middlewares/authMiddleware';
import { getStudents, getConcerns, resolveConcern, getStudentProgress, removeConcern, removeStudent, getConcernPdf } from '../controllers/instructorController';

const router = express.Router();

router.get('/students', authorize(['instructor']), getStudents);
router.get('/concerns', authorize(['instructor']), getConcerns);
router.put('/resolve-concern', authorize(['instructor']), resolveConcern);
router.get('/student-progress/:studentId', authorize(['instructor']), getStudentProgress);
router.delete('/remove-concern/:id', authorize(['instructor']), async (req, res, next) => {
	try {
		await removeConcern(req, res);
	} catch (err) {
		next(err);
	}
});
router.put('/remove-student/:studentId', authorize(['instructor']), async (req, res, next) => {
	try {
		await removeStudent(req, res);
	} catch (err) {
		next(err);
	}
});
router.get(
  '/concern-pdf/:id',
  authorize(['instructor']),
  async (req, res, next) => {
	try {
	  await getConcernPdf(req, res);
	} catch (err) {
	  next(err);
	}
  }
);

export default router;