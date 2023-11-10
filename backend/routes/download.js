import express from 'express';
import path from 'path';

const router = express();

router.get('/', (req, res) => {
    const currentDir = process.cwd();
    const filePath = path.join(currentDir, 'resume.pdf');
    
    res.download(filePath, 'my_resume.pdf', (err) => {
      if (err) {
        res.status(500).send('Hiba történt a fájl letöltése közben.');
      }
    });
});

export default router ;
