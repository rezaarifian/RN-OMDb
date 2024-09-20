import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

// styles
import Colors from '@theme/Colors';
import styles from './styles';

type Props = {
  backgroundColor?: string;
};

const StatusBarComp: React.FC<Props> = props => {
  const {backgroundColor = Colors.PRIMARY_01} = props;
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} />
      </SafeAreaView>
    </View>
  );
};

export default StatusBarComp;
