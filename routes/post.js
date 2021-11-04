const router = require('express').Router();

const Post = require('../controllers/posts');

router.get('/', Post.getposts);
router.post('/', Post.createPost);

module.exports = router;