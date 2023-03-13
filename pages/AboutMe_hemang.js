import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

const App = () => {
  const [name, setName] = useState('Enter Name');
  const [lastName, setLastName] = useState('Last Name');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>About Me...</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <DatePicker
        style={styles.datePicker}
        date={dateOfBirth}
        mode="date"
        placeholder="Select Date of Birth"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            borderWidth: 0,
            alignItems: 'flex-start',
          },
          placeholderText: {
            color: '#8E8E93',
          },
          dateText: {
            fontSize: 16,
            color: '#EBE0D6',
          },
        }}
        onDateChange={setDateOfBirth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284958',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 134,
    width: 284,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Optima',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 34,
    lineHeight: 41,
    color: '#EBE0D6',
  },
  input: {
    position: 'absolute',
    width: 315,
    height: 29,
    left: 39,
    borderWidth: 1,
    borderColor: '#EBE0D6',
    borderRadius: 10,
    paddingLeft: 10,
    top: 217,
    color: '#EBE0D6',
  },
  datePicker: {
    position: 'absolute',
    width: 315,
    height: 29,
    left: 39,
    top: 345,
  },
});

export default App;