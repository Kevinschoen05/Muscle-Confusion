function displayExercise() { 
    var output = exerciseSelector(exerciseSet);
    document.getElementById("exerciseOutput").innerText = output
    
    var reps = repsGenerator(); 
    document.getElementById("reps").innerText = reps;

};

function exerciseSelector(list){
    var randomExcercise = Math.floor(Math.random() * list.length)

    var selectedExercise = list[randomExcercise].NAME;
    return selectedExercise;
}

function repsGenerator(){
    var reps = (Math.floor(Math.random() * 20)) + 5
    return reps;
}


var exerciseSet = [
        {
          "NAME": "Barbell Flat Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Flat Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Barbell Incline Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Incline Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Fly",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Pushup",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Close Grip Incline Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Svend Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Cable Crossovers",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Cable Fly",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Barbell Decline Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Dumbell Decline Bench Press",
          "MUSCLE GROUP": "Chest"
        },
        {
          "NAME": "Lat Puldown",
          "MUSCLE GROUP": "Back"
        },
        {
          "NAME": "Seated Row",
          "MUSCLE GROUP": "Back"
        },
        {
          "NAME": "Bent Over Row",
          "MUSCLE GROUP": "Back"
        },
        {
          "NAME": "Wide Grip Pull Up",
          "MUSCLE GROUP": "Back"
        },
        {
          "NAME": "Close Grip Pull Up",
          "MUSCLE GROUP": "Back"
        },
        {
          "NAME": "Barbell Deadlift",
          "MUSCLE GROUP": "Back"
        },
        {
          "NAME": "Barbell Shoulder Press",
          "MUSCLE GROUP": "Shoulders"
        },
        {
          "NAME": "Dumbell Shoulder Press",
          "MUSCLE GROUP": "Shoulders"
        },
        {
          "NAME": "Dumbell Side Raises",
          "MUSCLE GROUP": "Shoulders"
        },
        {
          "NAME": "Dumbell Front Raises",
          "MUSCLE GROUP": "Shoulders"
        },
        {
          "NAME": "Face Pull",
          "MUSCLE GROUP": "Shoulders"
        },
        {
          "NAME": "Barbell Squat",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Dumbell Squat",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Dumbell Lunges",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Seated Leg Press",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Calf Raises",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Hamstring Curls",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Straight Leg Deadlifts",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Quad Exstensions",
          "MUSCLE GROUP": "Legs"
        },
        {
          "NAME": "Plank",
          "MUSCLE GROUP": "Abs"
        },
        {
          "NAME": "Hanging Leg Raises",
          "MUSCLE GROUP": "Abs"
        },
        {
          "NAME": "Russian Twist",
          "MUSCLE GROUP": "Abs"
        },
        {
          "NAME": "Situps",
          "MUSCLE GROUP": "Abs"
        },
        {
          "NAME": "Ab Roller",
          "MUSCLE GROUP": "Abs"
        },
        {
          "NAME": "Dumbell Curl ",
          "MUSCLE GROUP": "Biceps"
        },
        {
          "NAME": "Barbell Curl ",
          "MUSCLE GROUP": "Biceps"
        },
        {
          "NAME": "Dumbell Hammer Curl",
          "MUSCLE GROUP": "Biceps"
        },
        {
          "NAME": "Cable Curls",
          "MUSCLE GROUP": "Biceps"
        },
        {
          "NAME": "Preacher Curls",
          "MUSCLE GROUP": "Biceps"
        },
        {
          "NAME": "Cable Pull Downs",
          "MUSCLE GROUP": "Triceps"
        },
        {
          "NAME": "Close Grip Barbell Bench",
          "MUSCLE GROUP": "Triceps"
        },
        {
          "NAME": "Skull Crushers",
          "MUSCLE GROUP": "Triceps"
        },
        {
          "NAME": "Dips",
          "MUSCLE GROUP": "Triceps"
        },
        {
          "NAME": "Overhead Triceps Press",
          "MUSCLE GROUP": "Triceps"
        },
        {
          "NAME": "Shrugs",
          "MUSCLE GROUP": "Traps"
        },
        {
          "NAME": "Barbell Upright Row",
          "MUSCLE GROUP": "Traps"
        },
        {
          "NAME": "Farmers Walks",
          "MUSCLE GROUP": "Traps"
        }
       
]
