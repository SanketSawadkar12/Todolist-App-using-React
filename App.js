import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Platform, StyleSheet, Text, TextInput, View ,KeyboardAvoidingView , TouchableOpacity, Keyboard} from 'react-native';
import  Task  from './components/Task';

export default function App() {
  const [task , setTask] = useState();
  const [taskitems , setTaskItems] = useState([]);
  // what is up bantai trying to change

  const handleaddtask = () => {
    console.log(task);
    if (task===undefined || task===null || task==""){
      
    }
    
    else{
    Keyboard.dismiss();
    setTaskItems([...taskitems, task]);
    setTask(null);
    }


  
    
  }  
  const taskdelete = (index) => {
    // let itemsCopy = [...taskitems];
    taskitems.splice(index,1);
    setTaskItems([...taskitems]);
    console.log(taskitems);
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's Task</Text>
      
        <View style={styles.items}>
          {
          taskitems.map((item,index) => {
            return(

            
            <TouchableOpacity key = {index} onPress={() => taskdelete(index)}>

            <Task  text= {item}></Task>
            </TouchableOpacity> 
            )
            
          })
          } 
        </View>
      </View>
      <KeyboardAvoidingView
      behaviour={Platform.OS==='ios'?"padding":"height"}
      style={styles.writeTasksWrapper}>

        <TextInput
        style={styles.input} placeholder='Write a Task!!' value={task} onChangeText={text => setTask(text)}>

        </TextInput>
        <TouchableOpacity onPress={()=>handleaddtask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>


          </View>
        </TouchableOpacity>

        
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27374D',
    
  },
  tasksWrapper: {
    paddingTop : 80,
    paddingHorizontal : 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#DDE6ED',
  },
  items: {
    marginTop: 30,
  },
  writeTasksWrapper:{
    position:'absolute',
    bottom: '5%',
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:"center",
    

  },
  input:{
    color:'#27374D',
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:'#DDE6ED',
    borderRadius:60,
    width:'80%',



  },
  addwrapper:{
    backgroundColor:'#DDE6ED',
    borderRadius:40,
    width:60,
    height:60,
    alignItems:'center',

  },
  addText:{
    fontSize:40,
    

  },
});
