var skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
for(i=0; i<skills.length; i++){
   if(skills[i].getAttribute("aria-pressed") == "false"){
      skills[i].click()
   }
}