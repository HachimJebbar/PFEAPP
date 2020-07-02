import React,{Component} from "react";
import {View, StyleSheet, Image,Text} from "react-native"
import {db, storage} from "../FireBase/FireBase";
export default class annonceImages extends Component{
    constructor(props){
        super(props);
        this.uid= this.props.uid;
        this.state={
            postImage:""
        }
    }
    componentDidMount() {
        this.getImages();
    }

    getImages=()=>{
        let uid = this.props.uid;
        db.ref("users").orderByChild("uid").equalTo(this.uid)
            .once("value",function (snapshot) {
                snapshot.forEach( function (child) {
                    let Data = child.val();
                    Image(Data.PDP)
                })
                
            });
        const Image =async (Image)=>{
            if (Image === "" || Image === undefined || Image === null){
                let ref = storage.ref('UserImage/PDP.jpg');
                let url = await ref.getDownloadURL();
                this.setState({postImage:url})
            }else {
                let ref = storage.ref('UserImage/'+uid+'/'+Image);
                let url = await ref.getDownloadURL();
                this.setState({postImage:url})
            }
        }
    };
    
    render() {
        let uri =this.state.postImage;
        return(
            <View style={{flex:1}}>
                <Image style={styles.ImageView} source={{uri: uri}} />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    ImageView:{
        height: 150,
        marginLeft : '20%' ,
        flexDirection: 'column',
        width : '50%',
    },
});