import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import workoutData from './workoutData'; // Import workoutData (assuming it's structured similarly to ScheduleScreen)

const CalendarScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState({}); // State to track selected dates
  const [historicalData, setHistoricalData] = useState([]); // State to store historical workout data

  const handleDayPress = (day) => {
    const selectedDate = day.dateString;
    const workoutDay = getWorkoutDay(selectedDate);

    if (!selectedDates[selectedDate] && workoutDay !== 'Rest Day') {
      const updatedDates = { ...selectedDates, [selectedDate]: { selected: true, selectedColor: '#2E66E7' } };
      setSelectedDates(updatedDates);
      const workoutDetails = `${selectedDate}: ${workoutDay}`;
      setHistoricalData([...historicalData, workoutDetails]);
    } else {
      const updatedDates = { ...selectedDates };
      delete updatedDates[selectedDate];
      setSelectedDates(updatedDates);
      const updatedHistoricalData = historicalData.filter((data) => !data.startsWith(selectedDate));
      setHistoricalData(updatedHistoricalData);
    }
  };

  const getWorkoutDay = (selectedDate) => {
    const workoutDay = workoutData.find((item) => item.day === getDayOfWeek(selectedDate));
    return workoutDay ? workoutDay.type : 'Rest Day';
  };

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const isRestDay = (dateString) => {
    const workoutDay = getWorkoutDay(dateString);
    return workoutDay === 'Rest Day';
  };

  const renderRestDays = () => {
    const restDays = {};
    workoutData.forEach((item) => {
      if (item.type === 'Rest Day') {
        restDays[item.day] = { disabled: true, disableTouchEvent: true };
      }
    });
    return restDays;
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          ...selectedDates,
          ...renderRestDays(),
        }}
        style={styles.calendar}
        theme={{
          backgroundColor: '#FFF',
          calendarBackground: '#FFF',
          textSectionTitleColor: '#2E66E7',
          selectedDayBackgroundColor: '#2E66E7',
          selectedDayTextColor: '#FFF',
          todayTextColor: '#2E66E7',
          dayTextColor: '#333',
          textDisabledColor: '#ccc',
          arrowColor: '#2E66E7',
          monthTextColor: '#2E66E7',
          textDayFontFamily: 'Roboto',
          textMonthFontFamily: 'Roboto',
          textDayHeaderFontFamily: 'Roboto',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '400',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14
        }}
        enableSwipeMonths={true} // Allow swipe gestures to change months
      />
      <View style={styles.historicalDataContainer}>
        <Text style={styles.historicalDataHeader}>Historical Workout Data:</Text>
        {historicalData.map((data, index) => (
          <Text key={index} style={styles.historicalDataItem}>{data}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // White background
    padding: 20,
  },
  calendar: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  historicalDataContainer: {
    marginTop: 20,
  },
  historicalDataHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historicalDataItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CalendarScreen;
