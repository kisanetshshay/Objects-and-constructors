// pseudocode:
// 1.create an object called User 
// 2.The object has properties such as name and stepWalked(array of daily steps) 
// 3.Add methods totalSteps()which is sum of all values in stepsWalked and return totalSteps
// 4.And another method called averageSteps() that calculates average by dividing  totalstepsWalked by number of days
// 5.Finally invoke the methods

const User ={
    name:"Kisanet",
    stepsWalked:[1000,3500,4000],
    totalSteps:function(){
        return this.stepsWalked.reduce((acc,curr)=>acc+curr,0);
    },averageSteps:function(){
        return this.totalSteps()/this.stepsWalked.length;
    }
  
};
console.log("user total steps:", User.totalSteps());
console.log("user average steps:",User.averageSteps());



/*
pseudocode:
1.create a constructor called Recipe.
2.The constructor has properties name,ingredients which is an array and cookTime.
3.Add methods displayRecipe() that shows name and list readable listof ingredients.
4.And a method isQuikMeal that returns  true if cookTime is <=30 minutes.
5.Invoke the methods 
*/
function Recipe(name, ingredients, cookTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function() {
      console.log(`Recipe: ${this.name}`);
      console.log("Ingredients:");
      this.ingredients.forEach((ingredient, index) => {
        console.log(`${index + 1}. ${ingredient}`);
      });
      console.log(`Cook Time: ${this.cookTime} minutes`);
    };
    this.isQuickMeal = function() {
      return this.cookTime <= 30;
    };
  }
  
  const recipe = new Recipe("Rise", ["Rise", "potato", "Garlic",  "Salt"], 25);
  recipe.displayRecipe(); 
  console.log("Is aquick meal?", recipe.isQuickMeal()); 



/*pseudocode:
1.create an object called car.
2.The object contain properties like model,mileage,serviceHistory which is array of dates.
3.Add methods addService(date) which adds new date to serviceHistory.
4.And another method called lastServiceDate() to return recent date from serviceHistory
5.Invoke methods
*/
  const Car = {
    model: "Toyota",
    mileage: 200,
    serviceHistory: ["2021-01-5", "2021-11-10"],
    addService:function(date) {
      this.serviceHistory.push(date);
    },
    lastServiceDate:function() {
      return this.serviceHistory[this.serviceHistory.length - 1];
    }
  };

  Car.addService("2025-02-20");
  
console.log("Last Service Date:", Car.lastServiceDate());


/*pseudocode:
1.creating playlist object.
2.The object has property songs that is array of titles.
3.Adding methods addSong(title) that adds song to array.
4.Another method that removes song from array.
5.Another method that displays all song titles.
6.Invoke the methods.
*/

const Playlist = {
  songs: [],
  addSong:function(title) {
    this.songs.push(title);
  },
  removeSong:function(title) {
    this.songs = this.songs.filter(song => song !== title);
  },
  listSongs:function() {
    console.log("Playlist:");
    this.songs.forEach(song => console.log(song));
  }
};
Playlist.addSong("Song A");
Playlist.addSong("Song B");
Playlist.listSongs();
Playlist.removeSong("Song A");
Playlist.listSongs();

/*pseudocode
1.creating constructor called course.
2.The constructor has properties such as title,lessons and completedLessons which are an array.
3.Adding methods such as markComplete(lessons)that adds lessons to completedlessons and getProgress()that returns formatted string like "3 out of 5 lessons completed"
4.finally invoke the methods 

*/

function Course(title, lessons) {
  this.title = title;
  this.lessons = lessons;
  this.completedLessons = [];
  this.markComplete = function(lesson) {
      this.completedLessons.push(lesson);
    }
    this.getProgress = function() {
      return `${this.completedLessons.length} out of ${this.lessons.length} lessons completed`;
  };
  };

const course = new Course("Web Development", ["HTML", "CSS", "JavaScript", "python","kotlin"]);
course.markComplete("HTML");
course.markComplete("CSS");
course.markComplete("kotlin")
console.log(course.getProgress());




  