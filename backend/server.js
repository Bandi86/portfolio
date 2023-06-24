import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 8000;

function errorHandling(err) {
    if (err) {
        console.log(err);
    }
}

//json adatok kezelése (middleware)
app.use(express.json());

// CORS middleware használata
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true    
}));

// static cv download 
app.get('/cv.pdf', (req, res) => {
    res.download(path.resolve('files', 'cv.pdf'), 'suslecz_andras_cv.pdf', errorHandling);
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});