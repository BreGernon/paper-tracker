export const paperQueries = {
    readPaper: `
    SELECT id as paperId, color AS paperColor, weight AS paperWeight, 
        quantity AS paperQuantity, price AS paperPrice, cost AS paperPrintCost, 
        width AS paperWidth, length AS paperLength, inStore AS paperInStore
    FROM paper.papers
    `,
    readPaperByColor: `
    SELECT id as paperId, color AS paperColor, weight AS paperWeight, 
        quantity AS paperQuantity, price AS paperPrice, cost AS paperPrintCost, 
        width AS paperWidth, length AS paperLength, inStore AS paperInStore
    FROM paper.papers
    WHERE paper.papers.paperColor = ?
    `,
    readPaperByColorSearch: `
    SELECT id as paperId, color AS paperColor, weight AS paperWeight, 
        quantity AS paperQuantity, price AS paperPrice, cost AS paperPrintCost, 
        width AS paperWidth, length AS paperLength, inStore AS paperInStore
    FROM paper.papers
    WHERE paper.papers.paperColor LIKE ?
    `,
    readPaperByWeightSearch: `
    SELECT id as paperId, color AS paperColor, weight AS paperWeight, 
        quantity AS paperQuantity, price AS paperPrice, cost AS paperPrintCost, 
        width AS paperWidth, length AS paperLength, inStore AS paperInStore
    FROM paper.papers
    WHERE paper.papers.paperWeight LIKE ?
    `,
    readPaperByPaperId: `
    SELECT id as paperId, color AS paperColor, weight AS paperWeight, 
        quantity AS paperQuantity, price AS paperPrice, cost AS paperPrintCost, 
        width AS paperWidth, length AS paperLength, inStore AS paperInStore
    FROM paper.papers
    WHERE paper.papers.paperId = ?
    `,
    createPaper: `
    INSERT INTO  PAPERS (paperId, paperColor, paperWeight, paperQuantity, paperPrice, paperPrintCost, paperWidth, paperLength, paperInStore)
    VALUES(?,?,?,?,?,?,?,?,?)
    `,
    updatePaper: `
    UPDATE paper.papers
    SET paperColor = ?, paperWeight = ?, paperQuantity = ?, paperPrice = ?, paperPrintCost = ?, paperWidth = ?, paperLength = ?, paperInStore = ?
    WHERE paperId = ?
    `,
    deletePaper: `
    DELETE FROM paper.papers
    WHERE paperId = ?
    `,
}