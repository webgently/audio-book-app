import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import BgLayout from '../../layouts/bgLayout';
import { AppButton } from '../../components/button';
import styles from './_styles';

const descriptions = [
  { title: 'Title One', detail: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.' },
  { title: 'Title Two', detail: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.' },
  { title: 'Title Three', detail: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.' }
];

const GetStarted = () => {
  const navigation = useNavigation();
  const [stepIndex, setStepIndex] = React.useState(0);

  return (
    <BgLayout style={styles.gSLayout}>
      <View>
        {stepIndex === 0 ? (
          <Image source={require('../../assets/images/init1.png')} style={{ width: 220 }} />
        ) : stepIndex === 1 ? (
          <Image source={require(`../../assets/images/init2.png`)} style={{ width: 220 }} />
        ) : (
          <Image source={require(`../../assets/images/init3.png`)} style={{ width: 220 }} />
        )}
      </View>
      <View style={styles.gSDescriptions}>
        {descriptions.map((item, ind) => {
          if (ind !== stepIndex) return;
          return (
            <React.Fragment key={ind}>
              <Text style={styles.gSStepTitles}>{item.title}</Text>
              <Text style={styles.gSStepDetails}>{item.detail}</Text>
            </React.Fragment>
          );
        })}
      </View>
      <View style={styles.gSIndexs}>
        {Array.from({ length: 3 }, (_, index) => {
          return (
            <Text
              key={index}
              style={{
                color: stepIndex === index ? '#F77A55' : '#7466E3',
                fontSize: 40,
                fontWeight: 'bold'
              }}>
              &bull;
            </Text>
          );
        })}
      </View>
      <View style={styles.gSController}>
        {stepIndex === 0 || stepIndex === 1 ? (
          <>
            <AppButton
              type="default"
              title="Skip"
              style={{ width: 140, height: 52 }}
              onPress={() => stepIndex > 0 && setStepIndex(stepIndex - 1)}
            />
            <AppButton
              type="primary"
              title="Next"
              style={{ width: 140, height: 52 }}
              onPress={() => stepIndex < 2 && setStepIndex(stepIndex + 1)}
            />
          </>
        ) : (
          <AppButton
            style={{ width: 280, height: 52 }}
            type="primary"
            title="Lets Get Started"
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: 'auth' }]
                })
              )
            }
          />
        )}
      </View>
    </BgLayout>
  );
};

export default GetStarted;
