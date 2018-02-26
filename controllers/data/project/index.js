const express = require('express')
const _ = require('underscore')
const project = require('../../../models/project.js')
let router = express.Router()

// THIS IS A PLACEHOLDER FOR NOW, NOT FINISHED
router.get('/', function(req,res){
    project.getAllProjects(function(err,results)
    {
        if(err)
        {
            console.log("Error: " + err);
        }
        res.render('project', {
            results:results
        });
    });
});

router.get('/add', function(req,res){
    res.render('project-add');
})

router.post('/add', function(req,res){
    var project_name = req.body.project_name;
    var location = req.body.location;
    
    project.addProject(project_name, location, function(err, result)
    {
        if(err)
        {
            console.log("Error: " + err);
        }
        console.log("Added Project!");
        res.redirect('/data/project/added'); // This is a temporary solution, do not want to stay with this for long term
    });
}); 

router.get('/added', function(req,res)
{
    res.render('project-added');
})

module.exports= router;