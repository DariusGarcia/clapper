import React, { useState, useEffect } from 'react'
import { PaperProvider } from 'react-native-paper'
import 'react-native-url-polyfill/auto'
import Application from './components/application'

export default function App() {
  return (
    <PaperProvider>
      <Application />
    </PaperProvider>
  )
}
