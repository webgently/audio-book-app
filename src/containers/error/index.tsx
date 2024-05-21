import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { AppButton } from '../../components';
import { BackIcon } from '../../components/icons';
import style from './_style';

const Error = () => {
  const navigation = useNavigation();

  return (
    <View style={style.errorLayout}>
      <View style={style.errorBack}>
        <TouchableOpacity style={{ position: 'absolute', left: 30, top: 4 }}>
          <BackIcon size={9} height={16} />
        </TouchableOpacity>
        <Text style={{ color: '#2E2E5D', fontSize: 16, fontWeight: 500 }}>Error</Text>
        <View style={style.errorTopLine} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: 30 }}>
        <Image source={require('../../assets/images/error.png')} style={{ width: 220 }} />
        <Text style={{ textAlign: 'center', color: '#2E2E5D', fontSize: 16, fontWeight: 600 }}>
          Ops! Something Went Wrong
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#2E2E5D',
            fontSize: 14,
            fontWeight: 400,
            paddingLeft: 20,
            paddingRight: 20
          }}>
          Please check your internet connection and try again
        </Text>
        <AppButton
          type="outline"
          title="Retry"
          style={{ width: 280, height: 52 }}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'initial' }]
              })
            )
          }
        />
      </View>
    </View>
  );
};

export default Error;
