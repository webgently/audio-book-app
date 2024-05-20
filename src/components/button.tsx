import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const AppButton = ({ onPress, type, title, style }: any) => {
  const className = type ? `${type}_btn` : `default_btn`;
  return (
    <TouchableOpacity onPress={onPress} style={[styles[`${className}_container`], styles.btn_normal, { ...style }]}>
      <Text style={[styles[`${className}_text`], styles.btn_text_normal]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles: any = StyleSheet.create({
  btn_normal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  btn_text_normal: {
    fontSize: 16,
    alignSelf: 'center',
    textTransform: 'none'
  },
  primary_btn_container: {
    elevation: 8,
    backgroundColor: '#4838D1'
  },
  primary_btn_text: {
    color: '#fff'
  },
  outline_btn_container: {
    elevation: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4838D1',
    borderRadius: 8
  },
  outline_btn_text: {
    color: '#4838D1'
  },
  default_btn_container: {
    backgroundColor: 'transparent'
  },
  default_btn_text: {
    color: '#4838D1'
  }
});
