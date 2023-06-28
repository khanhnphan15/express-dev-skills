// Require the Model
// a model by convention singular and upperCase
const SkillModel = require('../models/skill')

module.exports = {
	index,
    show,
	// skills,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
	req.body.done = !!req.body.done;
	SkillModel.update(req.params.id, req.body);
	res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
	const skill = SkillModel.getOne(req.params.id);
	res.render('skills/edit', {
		title: 'Edit Skill',
		skill
	})
};
function deleteSkill(req, res) {
	SkillModel.deleteOne(req.params.id);
	res.redirect('/skills');
}

function create(req, res) {
	console.log(req.body);
	// The model is responsible for creating data
	SkillModel.create(req.body);
	// Do a redirect anytime data is changed
	res.redirect('/skills');
}

// controllers/todos.js
function show(req, res) {
	res.render('skills/show', {
		skill: SkillModel.getOne(req.params.id),
		title: 'Skill Details'

	});
}

function newSkill(req, res) {
	res.render('skills/new', { title: 'Create New Skill' })
}

// function show(req, res) {
// 	console.log(req.params.id, " <- req.params.id")
// 	res.render('todos/show', {todo: TodoModel.getOne(req.params.id)})
// }


// then render the todos/index.ejs, and inject a todos variable,
// that contains all the todos in the model file

function index(req, res, next) {
	res.render('skills/index.ejs', {
		skills: SkillModel.getAll(),
		title: 'All Skills',
	})
}


