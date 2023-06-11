import { StyleSheet, Text, View } from 'react-native'
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import { s } from 'react-native-wind'
import { Appbar } from 'react-native-paper'

export default function HomeScreen() {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title='Clapper' />
        <Appbar.Action icon='calendar' onPress={() => {}} />
        <Appbar.Action icon='magnify' onPress={() => {}} />
      </Appbar.Header>
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <Text
          style={s`flex justify-center items-center p-16 w-full h-full text-blue-600 text-4xl`}
        >
          Content is in safe area.
        </Text>
        <ActivityIndicator
          animating={true}
          color={MD2Colors.red800}
          style={s`mt-24`}
        />
      </View>
    </SafeAreaProvider>
  )
}
