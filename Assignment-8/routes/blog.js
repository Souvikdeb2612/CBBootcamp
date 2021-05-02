const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');


// Display all the products
router.get('/blog', async(req, res) => {
    
    const blogs=await Blog.find({});

    res.render('blogs/index',{blogs});
})


// Get add form
router.get('/blog/new', (req,res)=>{
    res.render('blogs/new');
})

// Add new blog
router.post('/blog', async(req,res)=>{
    await Blog.create(req.body.blog);
    res.redirect('/blog');
})


// Show one blog
router.get('/blog/:id', async(req, res) => {
    
    const blog=await Blog.findById(req.params.id).populate('reviews');;

    res.render('blogs/show', { blog });
})

// Get edit form

router.get('/blog/:id/edit', async(req, res) => {

    const blog=await Blog.findById(req.params.id);

    res.render('blogs/edit',{blog});
})

// Upadate the particular blog
router.patch('/blog/:id', async(req, res) => {
    
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);

    res.redirect(`/blog/${req.params.id}`)
})


// Delete blog
router.delete('/blog/:id', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/blog');
})


// Add review
router.post('/blog/:id/review', async (req, res) => {
    
    const blog = await Blog.findById(req.params.id);
    const review = new Review(req.body);
    console.log(review);

    blog.reviews.push(review);

    await review.save();
    await blog.save();

    res.redirect(`/blog/${req.params.id}`);
})
module.exports = router;