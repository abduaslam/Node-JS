// api.routes.js
const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.json({ message: 'API data' });
});

module.exports = router;