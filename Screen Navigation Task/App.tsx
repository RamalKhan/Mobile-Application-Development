import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
 const [name ,setName ]=useState("ramal");
  
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:40, color:"red",textAlign:"center"}}>Props in react-native</Text>
        <User name={name} age={20}/>
        <Button title='Update Name' color={"red"} onPress={()=>setName("Saad khan")}/>
      </View>
    </SafeAreaView>
  );
}
const User=(props)=>{
 
  return(
   <View style={{ backgroundColor:"black", padding:70}}>
    <Text style={{fontSize:40, color:"red",textAlign:"center"}}>{props.name }</Text>
    <Text style={{fontSize:40, color:"red",textAlign:"center"}}>{props.age}</Text>
    
   </View>
  );
}

export default App;


