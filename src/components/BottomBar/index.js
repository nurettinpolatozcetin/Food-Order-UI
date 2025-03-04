import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../assets';

const BottomBar = () => {
  return (
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
  );
};

export default BottomBar;
