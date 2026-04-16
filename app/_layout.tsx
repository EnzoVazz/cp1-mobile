import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Cadastro' }} />
      <Stack.Screen name="perfil" options={{ title: 'Meu Perfil' }} />
    </Stack>
  );
}