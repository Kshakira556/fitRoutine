import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'; // Import TouchableWithoutFeedback
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import workoutData from './workoutData'; // Import workoutData (assuming it's structured similarly to ScheduleScreen)
import profileIcon from './assets/profile_icon.jpg'; // Import your profile icon image

const ScheduleScreen = () => {
  const navigation = useNavigation();

  const handleDayPress = (day) => {
    navigation.navigate('DetailScreen', { day: day });
  };

  const handleProfilePress = () => {
    navigation.navigate('CalendarScreen'); // Navigate to the CalendarScreen
  };

  const renderDayItem = ({ item }) => (
    <View style={styles.dayItemContainer}>
      <TouchableWithoutFeedback
        onPress={() => handleDayPress(item.day)}
      >
        <View style={styles.dayTouchable}>
          <Text>{item.day}</Text>
          <Text>{item.type}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FitRoutine</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleProfilePress} // Navigate to CalendarScreen on press
        >
          <Image source={profileIcon} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={workoutData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderDayItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // White background
    paddingTop: Constants.statusBarHeight + 20, // Adjust paddingTop for status bar and header
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dayItemContainer: {
    width: '100%', // Ensure each item takes full width
  },
  dayTouchable: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default ScheduleScreen;
