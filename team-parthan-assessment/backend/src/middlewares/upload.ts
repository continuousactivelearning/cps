import multer from 'multer';

const storage = multer.memoryStorage(); // Keep file in memory
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === 'application/pdf') cb(null, true);
  else cb(new Error('Only PDFs allowed'), false);
};

const upload = multer({ storage, fileFilter });
export default upload;
