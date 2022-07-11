import React, {RefObject, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Control, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import {COLORS} from '@app/utils/constants/colors';
import {IDocument} from '@app/api/types';

interface NewDocumentPanelProps {
  panelRef: RefObject<BottomSheet>;
  onClose: () => void;
  control: Control<IDocument, object>;
}

const NewDocumentPanel: React.FC<NewDocumentPanelProps> = ({
  panelRef,
  onClose,
  control,
}: NewDocumentPanelProps) => {
  const snapPoints = useMemo(() => ['5%', '60%'], []);

  return (
    <BottomSheet
      ref={panelRef}
      index={0}
      backdropComponent={BottomSheetBackdrop}
      onClose={onClose}
      snapPoints={snapPoints}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{'Add document'}</Text>
        <Text style={styles.subTitle}>{'Document informations'}</Text>
        <View style={styles.formContainer}>
          <Text style={styles.inputTitle}>{'Name'}</Text>
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                placeholder="Placeholder"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="Title"
          />
          <View style={styles.formContainer}>
            <Text style={styles.inputTitle}>{'Version'}</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  mode="outlined"
                  onBlur={onBlur}
                  placeholder="Placeholder"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="Version"
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.inputTitle}>{'File'}</Text>
          </View>
          <View>
            <View style={styles.chooseFileContainer}>
              <Icon
                name="file-document-outline"
                size={17}
                color={COLORS.blue}
              />
              <Text style={styles.chooseFileText}>{'Choose file'}</Text>
            </View>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 16,
  },
  formContainer: {
    marginTop: 16,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chooseFileContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 5,
    marginTop: 8,
    flexDirection: 'row',
    padding: 8,
    maxWidth: 115,
  },
  chooseFileText: {
    color: COLORS.blue,
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export {NewDocumentPanel};
