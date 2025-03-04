import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons} from '../../../assets';
import {BottomBar, Products} from '../../../components';

const login = () => {
  return (
    <View style={Style.background}>
      <View style={Style.header}>
        <TouchableOpacity>
          <Image source={Icons.menu2} style={Style.menuicon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icons.basket} style={Style.menuicon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={Style.searchbarpos}>
          <View style={Style.searchbar}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Image source={Icons.search} style={Style.searchicon} />
              <Text style={Style.searchtxt}>Search</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={Style.categories}>
        <TouchableOpacity>
          <View style={Style.categorybar}>
            <Text style={Style.alltxt}>All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Style.unselectcategorybar}>
            <Text style={Style.newtxt}>New</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Style.unselectcategorybar}>
            <Text style={Style.newtxt}>Category</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{margin: 30}}>
        <View style={Style.line1}>
          <Products source={Icons.rainbow} />
          <Products source={Icons.choco} />
        </View>
        <View style={Style.line1}>
          <Products source={Icons.pink} />
          <Products source={Icons.melon} />
        </View>
      </View>
      <View style={Style.dotspos}>
        <View style={Style.dots}></View>
        <View style={Style.dots1}></View>
        <View style={Style.dots1}></View>
        <View style={Style.dots1}></View>
      </View>
      <BottomBar />
    </View>
  );
};
export default login;
