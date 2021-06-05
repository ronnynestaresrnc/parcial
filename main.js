
import fetchAbout  from './aboutFetch.js';

$("#link-about").click(()=>{
  fetchAbout()

})
$("#results-table tr").click(()=>{ 
  $(this).addClass("table-info")
  var posicion = $(this).index();
  console.log(posicion)
//  const img = character.results.map(({id,image})=>{})
 

 // $("#modal-card").append(modalTemplate('dddd'))

})





    
    









  
 