var targetButton = document.getElementsByClassName("pv-profile-section__card-action-bar pv-skills-section__additional-skills")
if(targetButton[0].getAttribute("aria-expanded") == "false"){
    targetButton[0].click()
}


var skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
for(i=0; i<skills.length; i++){
   if(skills[i].getAttribute("aria-pressed") == "false"){
      skills[i].click()
   }
}

