const router = require("express").Router();
const Comment = require("../models/comments.modal");
 const authentication =require("../middleware/authentication");

//Post comments
router.post("/add", authentication, (req, res) => {
    const newComment = new Comment({
        comment:req.body.comment,
        name:req.body.name,
        
    });
    newComment.save().then(comment => res.json(comment));
});

router.route("/").get((req, res) => {
   Comment.find().then(comments=>res.json(comments))
   .catch(err => res.status(400).json("Error:" + err));
});
   

module.exports = router;