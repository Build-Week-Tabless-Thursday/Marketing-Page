import { Organization } from './git.js';

const render = async () => {
    const organization = new Organization({ name: 'Build-Week-Tabless-Thursday' });
    await organization.fetchTeams();
  
    organization.members.forEach(async member => {
      document.querySelector('#members').appendChild(await member.render());
    });
  
    const technologies = new Technologies({
      members: usedTechnogies,
    });
  
    technologies.members.forEach(async member => {
      document.querySelector('#technologies').appendChild(await member.render());
    });
  
    document.querySelector('#loading').className = 'hide';
    document
      .querySelectorAll('.project-section')
      .forEach(section => (section.className = 'project-section animated fadeIn'));
  };
  
  render();