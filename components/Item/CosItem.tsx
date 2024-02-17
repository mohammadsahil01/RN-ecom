import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deletItemsfromCart, selectCart, updateCart} from "../../src/redux/CartSlice";
import { CosProduct } from "../../src/screens/Cosmetics";
  

const CosItem = (item: CosProduct) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch()

    const cartItem = cart.filter((element)=>element.id===item.id)
    
   
  
    function PressAddtoCart(){
      if(cartItem[0]?.quantity>4) return;
        if(cartItem.length===0){
            dispatch(addToCart({id:item.id,
                brand:item.brand,
                title:item.name,price:parseInt(item.price)*100,quantity:1,image:item.image_link}))      
        }else{
        dispatch(updateCart({id:item.id,
            brand:item.brand,
            title:item.name,price:parseInt(item.price)*100,quantity:cartItem[0].quantity+1,image:item.image_link}))         
        }
    }

    function deleteItem(){
        if(cartItem[0].quantity>1){
                dispatch(updateCart({id:item.id,
                brand:item.brand,
                title:item.name,price:parseInt(item.price)*100,quantity:cartItem[0].quantity-1,image:item.image_link}))        
        }else{
            dispatch(deletItemsfromCart({id:item.id}))
        }
    }
  
    return (
      <View style={styles.item}>
        <View style={styles.itemImgView}>
          <Image style={styles.img} source={{uri:`${item.image_link}`}}/>
        </View>
        <View style={styles.infoCol}>
          <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={{color:"black",fontSize:25,fontWeight:"500"}}>₹{parseInt(item.price)*100}</Text>
          </View>

          <View style={{flexDirection:"row"}}>

          <Pressable style={styles.button}
          onPress={()=>{PressAddtoCart()}}
          >
                        <Text style={[styles.buttonText,{color:"black"}]}>Add to Cart</Text>
                      </Pressable>
        {cartItem[0]?.quantity>0 &&
        <>
            <TouchableOpacity
            onPress={()=>{PressAddtoCart()}}
            style={[styles.button,{marginLeft:10}]}>
                <Text style={styles.boldText}>+</Text>
            </TouchableOpacity>
            <Text style={[styles.boldText,{padding:7,fontSize:20}]}>{cartItem[0]?.quantity}</Text>
            <TouchableOpacity
            onPress={()=>{deleteItem()}}
            style={styles.button}>
                <Text style={styles.boldText}>-</Text>
            </TouchableOpacity>
            </>
            }
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
     
    },
    ratingContainer: {
      flexDirection: 'row',
      marginTop: 5,
    },
    ratingText: {
      marginTop:4,
      marginRight: 5,
      fontSize: 16,
      
      color: '#6badb4', // Change the color of the rating text
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
      },
    starFilled: {
      color: 'gold', // Change the color of filled stars
      fontSize: 18,
      marginRight: 2,
    },
    starEmpty: {
      color: '#DAE0E2', // Change the color of empty stars
      fontSize: 18,
      marginRight: 2,
    },
    item: {
      flex:1,
      flexDirection:"row",
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:8,
      borderColor:"#DAE0E2",
      borderWidth:1
    },
    infoCol:{width:"50%",flex:1,flexDirection:"column",justifyContent:"space-between",paddingVertical:10,paddingHorizontal:10},
  
    title: {
      fontSize: 20,
      color:"black"
    },
    img:{
      width:80,
      height:140, 
    },
    itemImgView:{
      paddingVertical:40,
      paddingHorizontal:30,
      backgroundColor:"#f6f6f7",
      width:"40%",
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8
    },
    button:{
      backgroundColor:"#FFF222",
      width:"auto",
      alignItems:"center",
      padding:10,
      borderRadius:10,
      borderWidth:1,
      borderColor:"#FAD02E",
      
    },
    buttonText: {
        color: 'white',
        paddingHorizontal: 5,
      },
      quantityButton: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        paddingHorizontal: 7,
      },
      boldText: {
        fontWeight: 'bold',
        color:"black"
      },
  
  });

export default CosItem;