import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from "multer";
//const upload = multer({ dest: "./uploads" });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const uniqueName = `${uniquePrefix}__${file.originalname}`
      console.log(uniqueName)

      cb(null, uniqueName)
    }
  })

  function fileFilter(req, file, cb){
    
  }

  const upload = multer({ 
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024 //10MB
    }, 
    fileFilter
});

app.post("/form", (req, res) => {
    console.log(req.body);
    delete req.body.password;
    res.send(req.body);
});

app.post('/fileform', upload.single('file'), (req, res) => {
    console.log(req.body);
    res.send({ });
});


const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));