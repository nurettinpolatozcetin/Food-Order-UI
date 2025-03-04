import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const login = () => {
  return (
    <View style={Style.backgrounds}>
      <View style={Style.header}>
        <TouchableOpacity>
          <View>
            <Image source={Icons.back} style={Style.headericonstyle} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={Style.cartpos}>
          <Text style={Style.cartxt}>My Cart</Text>
        </View>
        <View>
          <View style={Style.productpos}>
            <View style={Style.products}>
              <View style={Style.propos}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                      }}>
                      <Image source={Icons.rainbow} style={Style.proicon} />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text style={Style.nametxt}>Rainbow Popsicle Stick</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={Style.trashpos}>
                      <Image source={Icons.trash} style={Style.trashicon} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Style.pricepos}>
                <View style={Style.price}>
                  <Text style={Style.pricetxt}>1</Text>
                </View>
                <View style={Style.price}>
                  <Text style={Style.pricetxt}>$3.99</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{margin: 10}}>
          <View style={Style.productpos}>
            <View style={Style.products}>
              <View style={Style.propos}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                      }}>
                      <Image source={Icons.choco} style={Style.proicon} />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text style={Style.nametxt}>Choco Popsicle Stick</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={Style.trashpos}>
                      <Image source={Icons.trash} style={Style.trashicon} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Style.pricepos}>
                <View style={Style.price}>
                  <Text style={Style.pricetxt}>2</Text>
                </View>
                <View style={Style.price}>
                  <Text style={Style.pricetxt}>$3.50</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={Style.productpos}>
            <View style={Style.products}>
              <View style={Style.propos}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                      }}>
                      <Image source={Icons.melon} style={Style.proicon} />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text style={Style.nametxt}>Melon Popsicle Stick</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={Style.trashpos}>
                      <Image source={Icons.trash} style={Style.trashicon} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Style.pricepos}>
                <View style={Style.price}>
                  <Text style={Style.pricetxt}>1</Text>
                </View>
                <View style={Style.price}>
                  <Text style={Style.pricetxt}>$2.99</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={Style.deliverpos}>
            <Text style={Style.pricetxt}>Deliver to</Text>
            <View style={Style.homeback}>
              <Text style={Style.pricetxt}>Home</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={Style.endline}>
            <View style={Style.details}>
              <Text style={Style.endlinepricetxt}>$ 10.48</Text>
              <Text style={Style.endlinedetailtxt}>View Details</Text>
            </View>
            <View style={{justifyContent: 'center', margin: 30}}>
              <TouchableOpacity>
                <View style={Style.buynowbutton}>
                  <Text style={Style.buynowtxt}>Buy Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
