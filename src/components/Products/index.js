import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons} from '../../assets';
import PropTypes from 'prop-types';
const Products = ({source}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={Style.product}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={Style.likeback}>
              <Image source={Icons.heart} style={Style.likeicon} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={source} style={Style.icecreams} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
Products.propTypes = {
  source: PropTypes.number,
};

export default Products;
