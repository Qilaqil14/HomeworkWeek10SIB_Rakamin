const router = require("express").Router();
const multer = require('multer')
const path = require('path')
const moviesControlles = require('../controllers/moviesControlles')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../upload"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });


router.post('/', upload.single('photo'), moviesControlles.createMovies);
router.get('/:id', moviesControlles.getMoviesId)
router.get('/', moviesControlles.getMovies)
router.put("/:id", upload.single("photo"), moviesControlles.updateMovies);
router.delete('/:id', moviesControlles.deleteMovies)

module.exports = router;
