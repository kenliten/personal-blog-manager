const express = require('express');
const router = express.Router();

const posts = [
  {
    id: 1,
    path: '',
    title: 'First post',
    body: '',
    authors: [],
    pubDate: new Date(),
    tags: [],
    categories: []
  },
  {
    id: 2,
    path: '',
    title: 'Second Post',
    body: '',
    authors: [],
    pubDate: new Date(),
    tags: [],
    categories: []
  },
]

router.get('/:id', (req, res) => {
  res.render('posts', { post: posts.find(post => post.id === +req.params.id) });
});

module.exports = router;
