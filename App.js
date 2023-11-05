import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import sc1 from ".components/Sc1";
import sc2 from ".components/Sc2";
import { createContext, useState } from "react";

let Stack = createStackNavigator();
export  let MyContext = createContext();

export default function App() {
  let [img, setimg] = useState("https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg");
  return (
    <MyContext.Provider value={{img, setimg}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="screen1" component={sc1} options={{ headerShown: false }} />
            <Stack.Screen name="screen2" component={sc2} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
    
    
  );
}


