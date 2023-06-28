// THIS IS SIMULATING A MODEL (WHICH represents getting your data)
// SIMULATING/NOT REALLY A MODEL
const skills = [{
    id: 1,
    skill: 'Javascript',
    level: 65,
    done: true
  },
  {
    id: 2,
    skill: 'HTML',
    level: 75,
    done: true,
  },
  {
    id: 3,
    skill: 'CSS',
    level: 80,
    done: true,
  },
  {
    id: 4,
    skill: 'Python',
    level: 50,
    done: false
  },
  {
    id: 5,
    skill: 'React JS',
    level: 20,
    done: false
  }
  ];
  
  module.exports = {
	  getAll,
	  getOne,
	  create,
	  deleteOne,
	  update,
  };

  // function update(id, skillUpdate){
  //   const idx = skills.findIndex(skill => skill.id === parseInt(id));
	// let skill = skills[idx];
	// skill = {
	// 	...skill, 
	// }

  function update(id, updateSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    skill.skill = updateSkill.skill;
  }

  function deleteOne(id) {
	  // Find the index based on the id of the skill object
	  const idx = skills.findIndex(skill => skill.id === parseInt(id));
	  skills.splice(idx, 1);
  }

  function create(skill) {
	  // Add the id
	  skill.id = Date.now() % 1000000;
	  // New skills wouldn't be done :)
	  skill.done = false;
	  skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
	  // Use the Array.prototype.find iterator method
	  return skills.find(skill => skill.id === parseInt(id));
  }



 