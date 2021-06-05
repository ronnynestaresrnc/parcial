
export default 
  function fetchAbout ()  {
    fetch("About.html")
      .then(res => res.text())
      .then(about =>  $("#content-table").html(about))
    }