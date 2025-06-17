import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import workoutData from './workoutData'; // Import workoutData (assuming it's structured similarly to ScheduleScreen)

// Import images for each day
import pushDayImage from './assets/push_day.jpg';
import pullDayImage from './assets/pull_day.jpg';
import legsDayImage from './assets/leg_day.jpg';
import coreDayImage from './assets/core_day.png';
import restDayImage from './assets/rest_day.jpg';
import fullBodyDayImage from './assets/full_body.jpg';

const DetailScreen = ({ route }) => {
  const { day } = route.params;
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    console.log('DetailScreen loaded with day:', day);
    const dayData = workoutData.find(item => item.day === day);
    setSelectedDay(dayData);
  }, [day]);

  useEffect(() => {
    console.log('Selected day data:', selectedDay);
  }, [selectedDay]);

  // Check if selectedDay is null or undefined
  if (!selectedDay) {
    console.warn(`No workout data found for day: ${day}`);
    return (
      <View style={styles.container}>
        <Text>No workout data found for {day}.</Text>
      </View>
    );
  }

  // Function to render the appropriate image based on the day
  const renderDayImage = () => {
    switch (selectedDay.day) {
      case 'Monday':
        return pushDayImage;
      case 'Tuesday':
        return pullDayImage;
      case 'Wednesday':
        return legsDayImage;
      case 'Thursday':
        return coreDayImage;
      case 'Friday':
        return restDayImage;
      case 'Saturday':
        return fullBodyDayImage;
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {/* App name as heading */}
        <Text style={styles.appName}>Your Fitness App</Text>
        
        {/* Display Image */}
        <Image source={renderDayImage()} style={styles.image} resizeMode="cover" />

        {/* Display Day */}
        <Text style={styles.heading}>{selectedDay.day}</Text>
        
        {/* Display Warm-up section if it exists */}
        {selectedDay.warmup && selectedDay.warmup.length > 0 && (
          <>
            <Text style={styles.subheading}>Warm-up:</Text>
            {selectedDay.warmup.map((warmup, index) => (
              <View key={index} style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{warmup}</Text>
              </View>
            ))}
          </>
        )}

        {/* Display Exercises section */}
        <Text style={styles.subheading}>Workout Routine:</Text>
        {selectedDay.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text>{exercise.sets} sets of {exercise.reps} reps</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  exerciseContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: width - 40, // Adjusted for responsive width
  },
  exerciseName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default DetailScreen;
