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


{/* <button class="pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid" aria-controls="skill-categories-expanded" aria-expanded="false" data-control-name="skill_details" data-ember-action="" data-ember-action-545="545">
                  */}