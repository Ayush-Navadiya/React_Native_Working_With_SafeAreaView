# React_Native_Working_With_SafeAreaView
React Native SafeAreaView Example



---
### What is SafeAreaView

> SafeAreaView renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

---
### How To Run

1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to start expo cli
6. Let it get started. Then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device


---
# Contribute 

> Give a thanks with coffee [Here](https://www.buymeacoffee.com/ayushnavadiya).\
> https://www.buymeacoffee.com/ayushnavadiya

---
## Output
![Kitten Material](https://github.com/Ayush-Navadiya/React_Native_Working_With_SafeAreaView/blob/master/Screenshots/SafeAreaView.jpg)



# Getting started from scratch


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

Install Expo-cli to start with react native expo app and if already installed skip this installation:

```bash
npm install --global expo-cli
```

Initialize app with the following command:

```bash
expo init your-project-name
```

Note: When You Run the 'expo init' command it will ask you to choose template go with: \
 - blank : a minimal app as clean as an empty canvas


---
## Running Program 
1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to expo cli
6. Let it get started then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device
9. Run command
```bash
npm install react-native-safe-area-context --save
```
10. To see the output on screen. Change the app.js code with the code given bellow

```
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Stuff inside SafeAreaView</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
```


