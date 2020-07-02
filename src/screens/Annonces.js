import React, { Component}  from 'react';
import {
    ScrollView,
    Image,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    CheckBox,
    TouchableHighlight,RefreshControl
} from 'react-native';
import {auth, db} from "../FireBase/FireBase";

export default class Annonces extends Component {
    constructor(props) {
        super(props);


        const {state} = props.navigation;
        this.state = {
            data : [],
            data2 : {},
            refreshing:false
        };
    }
    GetData=(userData,change=()=>{this.setState({data:userData})}, userData2,change2=()=>{this.setState({data2:userData2})})=>{

        let ref = db.ref("Annonces");
        let user = auth.currentUser.uid;

        ref.orderByChild("uid").equalTo(user).once("value",function (snapshot) {
            snapshot.forEach(function (child) {
                userData = snapshot.val();
                change();
            })
        })
    };
    changeCheckBox=(key,active)=>{
        console.log('activeactiveactive',active);
        db.ref('Annonces/'+key).update({
            active: active,
        });
        this.GetData();
    };

    componentDidMount() {

        this.GetData();
    }

    CardList = ({Annonces: {uid,cours, langue, methodologie, parcours,tarif,active}, IdAnnonces}) => {
        return (
                    <View style={styles.container2 }>
                        <View style={styles.container21 }>
                            <View style={styles.container212 }>
                                <Text style={styles.text3 }>{langue}</Text>
                            </View>
                            <View style={styles.container211 }>
                                <View style={{flexDirection:'row'} }>

                                    <Text style={styles.text2 }>Publier </Text>
                                    <CheckBox style={{ iconSize:'large'}}
                                              value={active}
                                              onValueChange={(e)=>this.changeCheckBox(IdAnnonces,e)}

                                    />
                                </View>
                            </View>
                        </View>
                    </View>


        )
    };

    onRefresh() {
        this.setState({refreshing: false,data:[]});
        this.GetData();
    }
    render() {
        let keys = Object.keys(this.state.data);

        return (

            <View style={styles.container}>
                <ScrollView     refreshControl={
                    <RefreshControl

                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                    />
                }>

                    {
                        keys.length > 0
                            ? keys.map((key) => {
                                return (

                                    <View  key={key}>
                                        <this.CardList
                                            Annonces={this.state.data[key]}
                                            IdAnnonces={key}
                                        />
                                    </View>
                                )
                            })
                            : <View ><Text style={styles.dirannonce }>Créer Votre Annonce et devenez Prof</Text></View>
                    }
                </ScrollView>
                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('HomeProf') } >
                    <Text style={{fontWeight: 'bold',fontSize : 50,color: '#fff' }}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor:  '#fff',
        position : 'relative'
    },
    container2: {
        flexDirection: 'column',
        backgroundColor:  '#F5F1F1',
        marginLeft : 30 ,
        marginVertical:20,
        marginBottom : 15 ,
        width : '90%',
    },
    container21: {
        flexDirection: 'row',
        width : '80%',
    },
    container211: {
        flexDirection: 'column',
        width : '50%',
        marginLeft:100,
    },
    container212: {
        flexDirection: 'column',
        width : '50%',
    },
    ImageView:{
        height: 70,
        borderRadius: 80,
        marginLeft : 15 ,
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        fontWeight: 'bold',
        marginBottom : 10 ,
        marginVertical : 40 ,
        marginLeft : 40 ,
    },
    text3 : {
        marginLeft : 20 ,
        fontSize : 19,
        color : '#AFA5A5',
        fontWeight: 'bold',
    },
    text2 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginVertical:3,
        fontWeight: 'bold',
    },
    ButtonStyle:{
        backgroundColor: '#E4D8D8',
        borderColor : '#E4D8D8',
        borderWidth:2,
        borderRadius:200,
        height : '13%',
        width : '18%',
        marginLeft : '76%' ,
        marginTop : '5%',
        textAlign : 'center',
        alignItems : 'center',

    },
    dirannonce : {
        marginTop : '50%',
        fontSize : 30,
        color : '#AFA5A5',
        fontWeight: 'bold',
        textAlign : 'center',
        alignItems : 'center',
    },
});