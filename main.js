
import fetchAbout  from './aboutFetch.js';





// Define a template



const  $linkAbout =document.getElementById("link-about")


$linkAbout.addEventListener('click', 
fetchAbout,
)



    
    









  
 /*  const getPestaña = (pestaña) => {
    fetch(`component/${pestaña}`)
    .then(res=>res.text())
    .then(data=>document.querySelector("#contenido-table").innerHTML = data);
  }; */