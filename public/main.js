function displayExercise() { 
    var output = exerciseSelector(exerciseSet);
    document.getElementById("exerciseOutput").innerText = output
    
    var reps = repsGenerator(); 
    document.getElementById("reps").innerText = reps;

};

function exerciseSelector(list){
    var randomExcercise = Math.floor(Math.random() * list.length)

    var selectedExerciseName = list[randomExcercise].NAME;
    var selectedExerciseMuscleGroup = list[randomExcercise].MUSCLE_GROUP;
    checkMuscleGroups(selectedExerciseMuscleGroup);
    return selectedExerciseName;
}

function repsGenerator(){
    var reps = Math.floor(Math.random() * 26)
    return reps;
}

function checkMuscleGroups(selectedExerciseMuscleGroup){
  if(selectedExerciseMuscleGroup === "Chest"){
    console.log("chest");
  }
}


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
          "NAME": "Lat Puldown",
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
