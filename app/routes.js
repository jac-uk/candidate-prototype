const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/create-an-exercise/v1-3-august-15/legal/key-contacts', function (req, res) {
    let over18 = req.session.data['legal']
    if (over18 === 'false') {
        res.redirect('/create-an-exercise/v1-3-august-15/non-legal/key-contacts')
    } else {
        res.redirect('/create-an-exercise/v1-3-august-15/legal/key-contacts')
    }
})

router.post('/create-an-exercise/v1-2-august-12/legal/length', function (req, res) {
    let over18 = req.session.data['legal']
    if (over18 === 'false') {
        res.redirect('/create-an-exercise/v1-2-august-12/non-legal/length')
    } else {
        res.redirect('/create-an-exercise/v1-2-august-12/legal/length')
    }
})

router.post('/create-an-exercise/v1-1-august-8/legal/length', function (req, res) {
    let over18 = req.session.data['legal']
    if (over18 === 'false') {
        res.redirect('/create-an-exercise/v1-1-august-8/non-legal/length')
    } else {
        res.redirect('/create-an-exercise/v1-1-august-8/legal/length')
    }
})

module.exports = router