import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList,TouchableOpacity,Linking,Platform} from 'react-native'

const ThirdScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       getData();
      }, []);

     const getData = async () => { 
       const response = await fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
       .then((response) =>response.json());
       setData(response);
       setLoading(false);
    
     };

     console.log("data=======================>",data);
     console.log("!!data===========>",!!data );


   const renderItem = (item) => {
    console.log("items in render >>>>.", item);
    let tagArray = item.item.tags;
    console.log("tags==========>",tagArray)
    return(
             
              <TouchableOpacity onPress={()=> Linking.openURL(item.item.link)}>
                {/* <View style={{marginHorizontal:5, borderWidth:1, borderColor: '#ff6200', borderRadius:5, shadowColor:'grey', marginVertical:5}}> */}
                <View style={{marginHorizontal:5, marginTop:20}}>
                    <Text style={{color:'black', fontSize:12, padding:5}}>{item.item.title}</Text>
                </View>

                <FlatList
                  horizontal
                  data={tagArray}
                  keyExtractor={ item => item.id}
                  renderItem={({ item,index }) =>
                  <View style={{marginHorizontal: Platform.OS == "android"? index == 1 ? 0 : 12 : 2,borderWidth:1, borderColor: '#ff6200', borderRadius:5, shadowColor:'grey',alignSelf: 'flex-start',height:30}}>
                      <View style={{justifyContent:'center',alignItems:'center',padding:6}}>
                         <Text style={{
                          color:'black', fontSize:12}}>{item}</Text>
                       </View>   
                </View>
                  }
                  showsHorizontalScrollIndicator={false}
                />

            <View style={{flexDirection:'row'}}>
               
              <View style={{flexDirection:'column'}}>
                <View style={{marginHorizontal:10, borderWidth:1, borderColor: '#ff6200', borderRadius:5, shadowColor:'grey', marginVertical:5,width:60,height:35}}>
                  <View style={{justifyContent:'center',alignItems:'center',padding:6}}>
                    <Text style={{
                      color:'black', fontSize:12}}>{item.item.score}</Text>
                    
                  </View>    
                </View>
                <View style={{marginHorizontal:10,justifyContent:'center',alignItems:'center'}}>
                <Text>votes</Text>
                </View>
                </View>


              <View style={{flexDirection:'column'}}>
                <View style={{marginHorizontal:-7,borderWidth:1, borderColor: '#ff6200', borderRadius:5, shadowColor:'grey', marginVertical:5,width:60,height:35,backgroundColor:'#ff6200'}}>
                  <View style={{justifyContent:'center',alignItems:'center',padding:6}}>
                    <Text style={{
                     
                      color:'black', fontSize:12}}>{item.item.answer_count}</Text>
                  </View>    
                </View>
                <View style={{marginHorizontal:2,justifyContent:'center',alignItems:'center'}}>
                <Text>answers</Text>
                </View>
              </View>  




            <View style={{flexDirection:'column'}}>
                <View style={{marginHorizontal:-1, borderWidth:1, borderColor: '#ff6200', borderRadius:5, shadowColor:'grey', marginVertical:5,width:60,height:35}}>
                  <View style={{justifyContent:'center',alignItems:'center',padding:6}}>
                    <Text style={{
                      
                      color:'black', fontSize:12}}>{item.item.view_count}</Text>
                  </View>    
                </View>
                <View style={{marginHorizontal:10,justifyContent:'center',alignItems:'center'}}>
                <Text>views</Text>
                </View>
            </View>  
        </View>         
              {/* </View>   */}
              </TouchableOpacity>  
          
    )
  }
    
  return (

    <View style={{flex:1}}>
        <FlatList 
            data={data.items}
            renderItem={renderItem}
            keyExtractor={ item => item.id}
        />
    </View>
  )
}

export default ThirdScreen
