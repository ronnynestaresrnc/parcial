
import API from './api.js';
import {tableTemplate} from './tableTemplate.js'
import {modalTemplate} from './modalTempate.js'

const api  =  new API()

async function renderTbody (){

    var character = await api.getCharacter()
    character.results.map( ({name,status}) =>{
    
     
     return $("#results-table").append(tableTemplate({name,status}));
   
    })

   
 

  }
   
  renderTbody()

 
  