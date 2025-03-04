import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const Login = () => {
  return (
    <View style={Style.backgrounds}>
      <View style={Style.product}>
        <View style={Style.header}>
          <TouchableOpacity>
            <Image source={Icons.back} style={Style.headericonstyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <View style={Style.likeback}>
                <Image source={Icons.heart} style={Style.likeicon} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Style.products}>
          <View>
            <Image source={Icons.rainbow} style={Style.icecreams} />
          </View>
          <View style={Style.extensions}>
            <TouchableOpacity>
              <View style={Style.basketback}>
                <Image source={Icons.basket} style={Style.basketicon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Style.basketback}>
                <Image source={Icons.add} style={Style.basketicon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.pricepos}>
          <Text style={Style.pricetxt}> $ 3.99</Text>
        </View>
        <View style={Style.starpos}>
          <Image source={Icons.star} style={Style.staricon} />
          <Image source={Icons.star} style={Style.staricon} />
          <Image source={Icons.star} style={Style.staricon} />
          <Image source={Icons.star} style={Style.staricon} />
          <Image source={Icons.star} style={Style.staricon} />
        </View>
      </View>
      <View>
        <View style={Style.namepos}>
          <Text style={Style.nametxt}>Rainbow Popsicle Stick </Text>
        </View>
        <View style={Style.namepos2}>
          <Text style={Style.name2txt}>Dondurma</Text>
        </View>
        <View style={Style.options}>
          <TouchableOpacity>
            <View style={Style.ingredientsbar}>
              <Text style={Style.ingretxt}>View Ingredients</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.orderbar}>
              <Text style={Style.ordertxt}>Order</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Style.dotspos}>
          <View style={Style.dots}></View>
          <View style={Style.dots1}></View>
          <View style={Style.dots1}></View>
          <View style={Style.dots1}></View>
        </View>
      </View>
      <View style={Style.bottomspacepos}>
        <View style={Style.bottomspace}>
          <View style={Style.bottominside}>
            <TouchableOpacity>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={Icons.shop} style={Style.stylebottomicons} />
                <Text style={Style.newtxt}>Shop</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={Icons.gift} style={Style.stylebottomicons} />
                <Text style={Style.newtxt}>Gifts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={Icons.discount} style={Style.stylebottomicons} />
                <Text style={Style.newtxt}>Offers</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={Images.abuzer} style={Style.iconsme} />
                <Text style={Style.newtxt}>Me</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Login;
