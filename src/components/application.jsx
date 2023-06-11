import React, { useState, useEffect } from 'react'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { supabase } from '../lib/supabase'
import Auth from '../features/auth/auth'
import { Text, View } from 'react-native'
import 'react-native-url-polyfill/auto'
import UserProfile from '../features/userProfile/profile'
import HomeScreen from '../pages/home'

export default function Application() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <SafeAreaProvider>
      <View>
        {session && session.user ? (
          <>
            {/* <UserProfile key={session.user.id} session={session} /> */}
            <HomeScreen />
          </>
        ) : (
          <Auth />
        )}
      </View>
    </SafeAreaProvider>
  )
}
