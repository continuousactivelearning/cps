import express from 'express';
import pdfRoutes from './routes/pdfRoute';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', pdfRoutes); // <-- Mounting here

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
