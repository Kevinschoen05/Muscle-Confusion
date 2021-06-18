function displayExercise(filter) {  
    var selectedMuscleGroup = muscleGroupSelector(exerciseSet, filter)
    var output = exerciseSelector(selectedMuscleGroup);
    document.getElementById("exerciseOutput").innerText = output;
    
    var reps = repsGenerator(); 
    document.getElementById("reps").innerText = reps;

};

function exerciseSelector(list){
    var randomExcercise = Math.floor(Math.random() * list.length)

    var selectedExercise = list[randomExcercise];
    return selectedExercise;
}

function repsGenerator(){
    var reps = Math.floor(Math.random() * (20 -5 )+5) 
    return reps;
}

function muscleGroupSelector(list, muscleGroup) { 
  selectedMuscleGroup = []; 

  for(var i = 0; i < list.length; i++){
    if(list[i].MUSCLE_GROUP === muscleGroup){
      selectedMuscleGroup.push(list[i].NAME);
    }
  }
  return selectedMuscleGroup;
}

//event listeners for filtering
const chestFilter = document.querySelector("#chestButton")
chestFilter.addEventListener('click', function (){
  if(chestFilter.checked){
    return true;
  }
})

const backFilter = document.querySelector("#backButton")
backFilter.addEventListener('change', function (){
  if(backFilter.checked){
    return true;
  }
})

const bicepsFilter = document.querySelector("#bicepsButton")
bicepsFilter.addEventListener('change', function (){
  if(bicepsFilter.checked){
    return true;
  }
})

const tricepsFilter = document.querySelector("#tricepsButton")
tricepsFilter.addEventListener('change', function (){
  if(tricepsFilter.checked){
    return true;
  }
})

const legsFilter = document.querySelector("#legsButton")
legsFilter.addEventListener('change', function (){
  if(legsFilter.checked){
    return true;
  }
})

const shoulderFilter = document.querySelector("#shouldersButton")
shoulderFilter.addEventListener('change', function (){
  if(shoulderFilter.checked){
    return true;
  }
})


//DATA
var exerciseSet = [
        {
          "NAME": "Barbell Flat Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Flat Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Barbell Incline Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Incline Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Fly",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Pushup",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Close Grip Incline Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Svend Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Cable Crossovers",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Cable Fly",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Barbell Decline Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Decline Bench Press",
          "MUSCLE_GROUP": "Chest"
        },
        {
          "NAME": "Lat Pulldown",
          "MUSCLE_GROUP": "Back"
        },
        {
          "NAME": "Seated Row",
          "MUSCLE_GROUP": "Back"
        },
        {
          "NAME": "Bent Over Row",
          "MUSCLE_GROUP": "Back"
        },
        {
          "NAME": "Wide Grip Pull Up",
          "MUSCLE_GROUP": "Back"
        },
        {
          "NAME": "Close Grip Pull Up",
          "MUSCLE_GROUP": "Back"
        },
        {
          "NAME": "Barbell Deadlift",
          "MUSCLE_GROUP": "Back"
        },
        {
          "NAME": "Barbell Shoulder Press",
          "MUSCLE_GROUP": "Shoulders"
        },
        {
          "NAME": "Dumbell Shoulder Press",
          "MUSCLE_GROUP": "Shoulders"
        },
        {
          "NAME": "Dumbell Side Raises",
          "MUSCLE_GROUP": "Shoulders"
        },
        {
          "NAME": "Dumbell Front Raises",
          "MUSCLE_GROUP": "Shoulders"
        },
        {
          "NAME": "Face Pull",
          "MUSCLE_GROUP": "Shoulders"
        },
        {
          "NAME": "Barbell Squat",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Dumbell Squat",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Dumbell Lunges",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Seated Leg Press",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Calf Raises",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Hamstring Curls",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Straight Leg Deadlifts",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Quad Exstensions",
          "MUSCLE_GROUP": "Legs"
        },
        {
          "NAME": "Plank",
          "MUSCLE_GROUP": "Abs"
        },
        {
          "NAME": "Hanging Leg Raises",
          "MUSCLE_GROUP": "Abs"
        },
        {
          "NAME": "Russian Twist",
          "MUSCLE_GROUP": "Abs"
        },
        {
          "NAME": "Situps",
          "MUSCLE_GROUP": "Abs"
        },
        {
          "NAME": "Ab Roller",
          "MUSCLE_GROUP": "Abs"
        },
        {
          "NAME": "Dumbell Curl ",
          "MUSCLE_GROUP": "Biceps"
        },
        {
          "NAME": "Barbell Curl ",
          "MUSCLE_GROUP": "Biceps"
        },
        {
          "NAME": "Dumbell Hammer Curl",
          "MUSCLE_GROUP": "Biceps"
        },
        {
          "NAME": "Cable Curls",
          "MUSCLE_GROUP": "Biceps"
        },
        {
          "NAME": "Preacher Curls",
          "MUSCLE_GROUP": "Biceps"
        },
        {
          "NAME": "Cable Pull Downs",
          "MUSCLE_GROUP": "Triceps"
        },
        {
          "NAME": "Close Grip Barbell Bench",
          "MUSCLE_GROUP": "Triceps"
        },
        {
          "NAME": "Skull Crushers",
          "MUSCLE_GROUP": "Triceps"
        },
        {
          "NAME": "Dips",
          "MUSCLE_GROUP": "Triceps"
        },
        {
          "NAME": "Overhead Triceps Press",
          "MUSCLE_GROUP": "Triceps"
        },
        {
          "NAME": "Shrugs",
          "MUSCLE_GROUP": "Traps"
        },
        {
          "NAME": "Barbell Upright Row",
          "MUSCLE_GROUP": "Traps"
        },
        {
          "NAME": "Farmers Walks",
          "MUSCLE_GROUP": "Traps"
        }
       
]
