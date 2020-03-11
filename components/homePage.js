import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Ionicons, EvilIcons,Feather,FontAwesome, Entypo} from '@expo/vector-icons';

const ListData = [
    {key:1, name: "Your story", img: require('../assets/img1.jpg') },
    {key:2, name: "Kenneth", img: require('../assets/img7.jpg') },
    {key:3, name: "Yaa", img: require('../assets/img2.jpg') },
    {key:4, name: "Lali", img: require('../assets/img3.jpg')},
    {key:5, name: "Audrey", img: require('../assets/img4.jpg')},
    {key:6, name: "Noah", img: require('../assets/img5.jpg')},
    {key:7, name: "Kwame", img: require('../assets/img6.jpg')},
    {key:8, name: "KK", img: require('../assets/img7.jpg')},  
  ]

  const ProfileImage = require('../assets/ig.jpg');
const ListItem = ({ name, img }) => {
    return(
        
        <View style={{backgroundColor:'whitesmoke'}}>
          <LinearGradient colors={["#c12384", "#f56040", "#fcaf45"]} style={{width: 80, height: 80, borderRadius: 40,  justifyContent:'center', alignItems:'center', margin: 5}}>
            <Image source={img} style={{width:70, height:70, borderRadius:45}} />     
          </LinearGradient>
          <Text style={{fontSize:13, marginTop:4, textAlign: 'center', marginBottom:19}}>{name}</Text>
         </View>
       
    );
};
const HomePage = () => {
    const [  like, setLike] = React.useState(new Animated.Value(0))
    let lastTap = null;
    const likeController = () => {
        let now = Date.now();
        let minimumDuration = 300;
        if(lastTap && (now-lastTap) < minimumDuration){
            Animated.sequence([
                Animated.timing(like, {
                    toValue:1,
                    duration:500
                }),
                Animated.timing(like, {
                    toValue:1,
                    duration:500
                }),
                Animated.timing(like, {
                    toValue:0,
                    duration:500
                })
            ]).start()
        }else{
            lastTap = now;
        }
    }

    return(
        <ScrollView>
            <View style={{borderBottomWidth:0.5}}>
                <FlatList
                data={ListData}
                renderItem={({item}) => <ListItem name={item.name} img={item.img} /> }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>
           <View style={{flexDirection:'row', marginLeft:10, marginTop:10}}>
                <LinearGradient colors={["#c12384", "#f56040", "#fcaf45"]} style={{width: 60, height: 60, borderRadius: 30,  justifyContent:'center', alignItems:'center', margin: 5}}>
                    <Image source={ProfileImage} style={{width:50, height:50, borderRadius:30}} />
                </LinearGradient>
             <View style={{marginTop:20, marginLeft:3, flexDirection:'row'}}>
               <Text style={{fontWeight:'600'}} >audi</Text>
               <AntDesign
                 name="ellipsis1"
                 size={22}
                 style={{marginLeft:260}}
               />
             </View> 
           </View>
           <View style={{alignItems:'stretch'}}>
               <TouchableWithoutFeedback onPress={likeController}>
                   <View>
                <Image source={require("../assets/audi.jpg")} style={{width:430, height:430}} />
                <Animated.View style={{position:'absolute',width:430, height:430,justifyContent:'center',alignItems:'center',opacity:like }}>
                    <Ionicons name="ios-heart" size={100} color="#fff" />
                </Animated.View>
                </View>
               </TouchableWithoutFeedback>
           </View>
           <View style={{paddingHorizontal:10, marginTop:5, flexDirection:'row'}}>
               <TouchableOpacity>
                 <Ionicons
                  name="ios-heart-empty"
                  size={26}
                 />
               </TouchableOpacity>
               <TouchableOpacity style={{marginLeft:5}}>
                <EvilIcons 
                    name="comment"
                    size={30}
                />
               </TouchableOpacity>  
               <TouchableOpacity  style={{marginLeft:5}}>
                <Feather 
                    name="send"
                    size={26}
                    style={{marginLeft:5}}
                />
               </TouchableOpacity>
               <TouchableOpacity style={{marginLeft:285}}>
                <FontAwesome
                    name="bookmark-o"
                    size={26}    
                />
               </TouchableOpacity>   
           </View>
           <View style={{marginLeft:10, marginTop:4}}>
               <Text>1,500 likes</Text>
               <View style={{marginTop:5, flexDirection:'row'}}>
                 <Text >Stunning</Text>
                 <Entypo name="emoji-happy" style={{marginLeft:4}}  size={18} />
               </View>
             
           </View>
           
        </ScrollView>
    );
};

export default HomePage;