const Comment_like = require('../models/comment_like.model.js');
const Comment = require('../models/comment.model');

import User from "../models/user.model";
import middleware from '../../middleware';

exports.create = (req, res) => {
    Comment.findById(req.params.commentId).then(comment => {
        User.findById(req.decoded.userId).then(user => {
            Comment_like.find( {user: user, comment: comment}, function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Comment_like."
                    });
                }
                if (!results.length) {
                    const comment_like = new Comment_like({
                        user: user,
                        comment: comment
                    });
                
                    comment_like.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Comment_like."
                        });
                    });
                }
                if(results.length){
                    res.status(500).send({
                        message: "Like is done"
                    });
                }
            })
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Comment not found"
        });
    });
};

exports.findAll = (req, res) => {
    Comment_like.find({comment: req.body.comment})
    .then(comment_likes => {
        res.send(comment_likes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving comment_likes."
        });
    });
};

exports.delete = (req, res) => {
    Comment_like.findById(req.params.comment_likesId).then(comment_likes_found => {
        if(!comment_likes_found) {
            return res.status(404).send({
                message: "Comment_likes not found with id " + req.params.comment_likesId
            });
        }
        User.findById(req.decoded.userId).then(user => {
            let str1 = new String(comment_likes_found.user);
            let str2 = new String(user._id);
            let buf1 = Buffer.from(str1);
            let buf2 = Buffer.from(str2);
            console.log(buf1.equals(buf2));
            if (middleware.comparison(comment_likes_found.user, user._id)){
                Comment_like.findByIdAndDelete(req.params.comment_likesId).then( comment_likes_del => {
                    res.send({message: "Comment_likes deleted successfully!"});
                })
            }
            else{
                return res.status(404).send({
                    message: "Not your commentLike"
                });
            }
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Comment_likes not found with id " + req.params.comment_likesId
            });                
        }
        return res.status(500).send({
            message: "Could not delete comment_likes with id " + req.params.comment_likesId
        });
    });
};