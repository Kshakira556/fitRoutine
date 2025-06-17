import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import workoutData from './workoutData'; // Import workoutData

const HomeScreen = () => {
  // Get today's date
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Find today's workout routine
  const todayWorkout = workoutData.find(day => day.day === today);

  if (!todayWorkout) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Rest day!</Text>
        <Text>Enjoy your day off, but remember to stay active!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* App name header */}
      <Text style={styles.appName}>FitRoutine</Text>

      {/* Profile icon */}
      <TouchableOpacity style={styles.profileIconContainer} onPress={() => console.log('Profile icon clicked')}>
        <Image
          source={require('./assets/profile_icon.jpg')}
          style={styles.profileIcon}
        />
      </TouchableOpacity>

      {/* Workout type */}
      <Text style={styles.heading}>{todayWorkout.type}</Text>

      {/* List of exercises */}
      <FlatList
        data={todayWorkout.exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text>Sets: {item.sets}</Text>
            <Text>Reps: {item.reps}</Text>
          </View>
        )}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Light background color
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: width - 40, // Responsive width
    alignSelf: 'center', // Center items horizontally
    backgroundColor: '#fff', // White background for cards
  },
  exerciseName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // Ensure it's above other content
    backgroundColor: '#fff', // White background for icon container
    borderRadius: 20, // Round the container
    padding: 5, // Padding around the icon
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default HomeScreen;
