const express = require('express');
const {createBlog, getAllBlogs, updatedBlog, deleteBlog} = require('../controllers/blog_controllers')
const router = express.Router();

router.route('/').post(createBlog).get(getAllBlogs);

router.route('/:id').put(updatedBlog).delete(deleteBlog);

module.exports = router