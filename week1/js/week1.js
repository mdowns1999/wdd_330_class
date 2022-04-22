check_type(1)
/* 
The function down below will take an input called type then measure it against the various kinds of values it could be.
I used the tyeof to simply check what the type is.  
If we want to use this with HTML though, we will have to tweak it a little bit to make it work.
*/
function check_type(type){
    if(typeof type == typeof 1){
      console.log('Number')
    }
    else if(typeof type == typeof 'string'){
      console.log('String')
    }
    else if(typeof type == typeof true){
      console.log('Boolean')
    }
    else if(typeof type == typeof ['string']){
      console.log('Object')
    }
    else if(typeof type == typeof check_type){
      console.log('Function')
    }
    else{
      console.log('Undefined')
    }
}


/* 
The function down simply places the year at the bottom of the page.
*/
function footer_date(){
  let date = new Date()
  let year = date.getFullYear()

  document.getElementById('year').textContent = year;
}

footer_date()





// function loadStory(){
// var storyName = document.getElementById("name_input").value
// var storyHTML = localStorage.getItem(storyName)
// document.getElementById("story_editor").value = storyHTML

// }

// function saveStory(){
//   var storyName = document.getElementById("name_input").value
//   var storyHTML = localStorage.getElementById("story_editor").value
//   localStorage.setItem(storyName, storyHTML)
// }

// function displayStory(){
//   var storyHTML = document.getElementById("story_editor").value
//   document.getElementById("story_display").innerHTML = storyHTML
// }