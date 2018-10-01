'use strict';
// Include our "db"
var Members = require('../models/member');

module.exports = { getMembers, saveMember, getMember, updateMember, delMember };
//GET /member operationId
function getMembers(req, res, next) {

    Members.find({ "firstName": { $ne: null } }, function(err, members) {
        if (err) {
            res.status(500).json(err).end();
            return;
        }

        res.json({
            members: members
        }).end();
    });
    //res.json({ members: Members.find() });
}
//POST /member operationId
function saveMember(req, res, next) {
    var member = new Members(req.swagger.params.member.value);
    member.save(function(err) {
        if (err) {
            res.status(500).json(err).end();
            return;
        }

        res.json({
            memberadded: member
        }).end();
    })

}
//GET /member/{id} operationId
function getMember(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var member = Members.find(id);
    if (member) {
        res.json({ member: member }).end();
    } else {
        res.status(204).send();
    }
}
//PUT /member/{id} operationId
function updateMember(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var member = req.swagger.params.member.value;
    if (Members.update(id, member)) {
        res.json({ member: member }).end();
    } else {
        res.status(204).send();
    }

}
//DELETE /member/{id} operationId
function delMember(req, res, next) {
    console.log(req.swagger.params.id.value);
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if (Members.findOne({ _id: id })) {
        console.log(Members.findOne({ _id: id }));
        Members.remove({ _id: id });
        res.json({ success: 1, description: "member deleted!" }).end();
    } else {
        res.status(204).send();
    }

}