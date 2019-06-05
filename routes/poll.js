const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '792460',
    key: '060c04e632b798bceb56',
    secret: 'd3cdbfefba0d56ab1051',
    cluster: 'ap2',
    encrypted: true
  });

router.get('/', (req, res) => {
    res.send('poll'); 
});

router.post('/', (req, res) => {
    pusher.trigger('os-vote', 'os-poll', {
        points: 1,
        os:req.body.os
      });

      return res.json({success: true, message:'thank you for voting'})

});
module.exports = router;