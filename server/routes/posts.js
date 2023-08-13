const router = require('express').Router;
let Post = require('../models/post.model')

/**
 * This router request will do an API fetch to mongodb for all the posts for that user
 */
router.route('/').get((req, res) => {
    
})

/**
 * This request will add a Post to MongoDB
 */
router.route('/add').post((req, res) => {
    
})

/**
 * This request will delete a post
 */
router.route('/delete').post((req, res) => {
    
})

router.route('/search').get((req, res) => {
    
})

module.exports = router;