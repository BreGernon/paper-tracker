import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Paper } from './papers.model';
import { paperQueries } from './papers.queries';

export const readPaper = async () => {
    return execute<Paper[]>(paperQueries.readPaper, []);
};

export const readPaperByColor = async (paperColor: string) => {
    return execute<Paper[]>(paperQueries.readPaperByColor, [paperColor]);
};

export const readPaperByColorSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Paper[]>(paperQueries.readPaperByColorSearch, [search]);
};

export const readPaperByWeightSearch = async (search: number) => {
    console.log('search param', search);
    return execute<Paper[]>(paperQueries.readPaperByWeightSearch, [search]);
};

export const readPaperByPaperId = async (paperId: number) => {
    return execute<Paper[]>(paperQueries.readPaperByPaperId, [paperId]);
};

export const createPaper = async (paper: Paper) => {
    return execute<OkPacket>(paperQueries.createPaper, [paper.paperId, paper.paperColor, paper.paperWeight, paper.paperQuantity, paper.paperPrice, paper.paperPrintCost, paper.paperWidth, paper.paperLength, paper.paperInStore]);
};

export const updatePaper = async (paper: Paper) => {
    return execute<OkPacket>(paperQueries.updatePaper, [paper.paperColor, paper.paperWeight, paper.paperQuantity, paper.paperPrice, paper.paperPrintCost, paper.paperWidth, paper.paperLength, paper.paperInStore]);
};

export const deletePaper = async (paperId: number) => {
    return execute<OkPacket>(paperQueries.deletePaper, [paperId]);
};