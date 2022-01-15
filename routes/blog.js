const express = require('express')
const path = require('path')
const blogs = require('../data/blogs.js')

const router = express.Router() // creating router for blog

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('index')
})

router.get('/blog', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/home.html'))
    res.render('home', {
        bgs: blogs
    })
})

router.get('/blogpost/:id', (req, res) => {
    let b = blogs.filter((element) => {
        return element.id == parseInt(req.params.id)
    })
    // res.sendFile(path.join(__dirname, '../templates/post.html'))
    res.render('post', {
        bgs: b[0]
    })
})


module.exports = router