const workoutData = [
  {
    day: 'Monday',
    type: 'Push (Chest, Shoulders, Triceps)',
    warmup: [
      'Light Cardiovascular Exercise: 5-10 minutes',
      'Dynamic Stretches: Arm circles, shoulder circles, thoracic spine rotations (2 sets of 8-10 reps each)',
      'Mobility Exercises: Shoulder dislocations, doorway chest stretches (1 set of 8-10 reps each)',
      'Warm-up Sets: Dumbbell Bench Press - 1-2 sets of 10-12 reps with lighter weights',
    ],
    exercises: [
      { name: 'Dumbbell Bench Press', sets: 4, reps: '8-12' },
      { name: 'Incline Dumbbell Press', sets: 4, reps: '8-12' },
      { name: 'Dumbbell Flyes', sets: 3, reps: '12-15' },
      { name: 'Dumbbell Pullover', sets: 3, reps: '10-12' },
      { name: 'Close-Grip Dumbbell Press', sets: 3, reps: '8-12' },
      { name: 'Overhead Dumbbell Triceps Extension', sets: 3, reps: '10-12' },
    ],
  },
  {
    day: 'Tuesday',
    type: 'Pull (Back, Biceps)',
    warmup: [
      'Light Cardiovascular Exercise: 5-10 minutes',
      'Dynamic Stretches: Arm circles, torso twists (2 sets of 8-10 reps each)',
      'Mobility Exercises: Shoulder dislocations, band pull-aparts, ankle circles, ankle dorsiflexion stretches (1 set of 8-10 reps each)',
      'Warm-up Sets: Bent Over Dumbbell Rows - 1-2 sets of 10-12 reps with lighter weights',
    ],
    exercises: [
      { name: 'Bent Over Dumbbell Rows', sets: 4, reps: '8-12' },
      { name: 'Single-Arm Dumbbell Rows', sets: 4, reps: '8-12' },
      { name: 'Dumbbell Deadlift', sets: 4, reps: '8-12' },
      { name: 'Dumbbell Pullover', sets: 3, reps: '10-12' },
      { name: 'Dumbbell Bicep Curls', sets: 4, reps: '10-12' },
      { name: 'Hammer Curls', sets: 3, reps: '10-12' },
      { name: 'Concentration Curls', sets: 3, reps: '12-15' },
    ],
  },
  {
    day: 'Wednesday',
    type: 'Legs',
    warmup: [
      'Light Cardiovascular Exercise: 5-10 minutes',
      'Dynamic Stretches: Leg swings, hip circles (2 sets of 8-10 reps each)',
      'Mobility Exercises: Hip flexor stretches, ankle circles, ankle dorsiflexion stretches (1 set of 8-10 reps each)',
      'Warm-up Sets: Goblet Squats - 1-2 sets of 10-12 reps with lighter weights',
    ],
    exercises: [
      { name: 'Goblet Squats', sets: 4, reps: '10-12' },
      { name: 'Dumbbell Lunges', sets: 4, reps: '10-12' },
      { name: 'Dumbbell Step-Ups', sets: 3, reps: '12-15' },
      { name: 'Romanian Deadlifts', sets: 4, reps: '10-12' },
      { name: 'Dumbbell Calf Raises', sets: 4, reps: '15-20' },
      { name: 'Dumbbell Glute Bridges', sets: 3, reps: '12-15' },
      { name: 'Lateral Band Walks', sets: 3, reps: '20 steps' },
      { name: 'Clamshells', sets: 3, reps: '15' },
    ],
  },
  {
    day: 'Thursday',
    type: 'Core and Lower Back',
    warmup: [
      'Light Cardiovascular Exercise: 5-10 minutes',
      'Dynamic Stretches: Cat-cow stretches, spinal twists (2 sets of 8-10 reps each)',
      'Mobility Exercises: Cat-camel stretches, seated spinal twists (1 set of 8-10 reps each)',
      'Warm-up Sets: Hanging Leg Raises - 1-2 sets of 10-12 reps with lighter weights',
    ],
    exercises: [
      { name: 'Roman Chair Leg Raises', sets: 4, reps: '15-20' },
      { name: 'Cable Crunches', sets: 4, reps: '15-20' },
      { name: 'Russian Twists', sets: 4, reps: '20' },
      { name: 'Planks', sets: 3, reps: '1 minute' },
      { name: 'Wrist Curls', sets: 4, reps: '15-20' },
      { name: 'Reverse Wrist Curls', sets: 4, reps: '15-20' },
      { name: "Farmer's Walk", sets: 4, reps: '1 minute' },
    ],
  },
  {
    day: 'Friday',
    type: 'Rest Day',
    exercises: [],
  },
  {
    day: 'Saturday',
    type: 'Full Body (Optional)',
    warmup: [
      'Light Cardiovascular Exercise: 5-10 minutes',
      'Dynamic Stretches: Arm circles, shoulder circles, thoracic spine rotations (2 sets of 8-10 reps each)',
      'Mobility Exercises: Shoulder dislocations, doorway chest stretches (1 set of 8-10 reps each)',
      'Warm-up Sets: Dumbbell Clean and Press - 1-2 sets of 8-10 reps with lighter weights',
    ],
    exercises: [
      { name: 'Dumbbell Clean and Press', sets: 3, reps: '8-10' },
      { name: 'Dumbbell Thrusters', sets: 3, reps: '10-12' },
      { name: 'Renegade Rows', sets: 3, reps: '10-12' },
      { name: 'Dumbbell Burpees', sets: 3, reps: '10-12' },
    ],
  },
  {
    day: 'Sunday',
    type: 'Rest Day',
    exercises: [],
  },
];

export default workoutData;
