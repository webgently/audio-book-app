import { View, Image } from 'react-native';

const BgLayout = (props: any) => {
  return (
    <View style={[props.style, { position: 'relative' }]}>
      <Image
        source={require('../assets/images/bgitem1.png')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />
      <Image
        source={require('../assets/images/bgitem2.png')}
        style={{ position: 'absolute', top: 50, right: 0, zIndex: 0 }}
      />
      {props.children}
    </View>
  );
};

export default BgLayout;
