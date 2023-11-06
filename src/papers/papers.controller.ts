import { Request, RequestHandler, Response } from 'express';
import { Paper } from './papers.model';
import * as PaperDao from './papers.dao';
import { OkPacket } from 'mysql';

export const readPaper: RequestHandler = async (req: Request, res: Response) => {
    try{
        let papers;
        let paperId = parseInt(req.query.paperId as string);

        console.log('paperId', paperId);
        if (Number.isNaN(paperId)) {
            papers = await PaperDao.readPaper();
        } else {
            papers = await PaperDao.readPaperByPaperId(paperId);
        }
        
        res.status(200).json(papers);
    } catch (error) {
        console.error('[papers.controller][readPaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching paper'
        });
    }
};

export const ReadPaperByColor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const papers = await PaperDao.readPaperByColor(req.params.paperColor);

        res.status(200).json(
            papers
        );
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching papers'
        });
    }
};

export const readPaperByColorSearch: RequestHandler = async (req: Request, res: Response) => {
    try{
        console.log('search', req.params.search);
        const papers = await PaperDao.readPaperByColorSearch('%' + req.params.search + '%');

        res.status(200).json(
            papers
        );
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums'
        });
    }
};

export const readPaperByWeightSearch: RequestHandler = async (req: Request, res: Response)  => {
    try{
        console.log('search', req.params.search);
        const papers = await PaperDao.readPaperByWeightSearch(parseInt(req.params.search));

        res.status(200).json(papers);
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching paper'
        });
    }
};

export const createPaper: RequestHandler = async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await PaperDao.createPaper(req.body);

        console.log('req.body', req.body);
        
        console.log('paper', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[papers.controller][createPaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing paper'
        });
    } 
};

export const updatePaper: RequestHandler = async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await PaperDao.updatePaper(req.body);

        console.log('req.body', req.body);
        
        console.log('paper', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[paper.controller][updatePaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating albums'
        });
    }
};

export const deletePaper: RequestHandler = async (req: Request, res: Response) => {
    try{
        let paperId = parseInt(req.params.paperId as string);

        console.log('paperId', paperId);
        if(!Number.isNaN(paperId)){
            const response = await PaperDao.deletePaper(paperId);

            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for albumId");
        }
    } catch (error) {
        console.error('[paper.controller][deletePaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting albums'
        });
    }
};