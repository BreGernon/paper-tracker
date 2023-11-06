import { Router } from 'express';
import * as PapersController from './papers.controller';

const router = Router();
router.
    route('/papers').
    get(PapersController.readPaper);

router.
    route('/papers/:color').
    get(PapersController.ReadPaperByColor);

router.
    route('/papers/search/color/:search').
    get(PapersController.readPaperByColorSearch);

router.
    route('/papers/search/weight/:search').
    get(PapersController.readPaperByWeightSearch);

router.
    route('/papers').
    post(PapersController.createPaper);

router.
    route('/papers').
    put(PapersController.updatePaper);

router.
    route('/papers/:paperId').
    delete(PapersController.deletePaper);

export default router;