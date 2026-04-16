import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [dadosCadastrados, setDadosCadastrados] = useState<any>(null);

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await AsyncStorage.getItem('dadosFormulario');
      if (dados) {
        setDadosCadastrados(JSON.parse(dados));
      }
    };
    carregarDados();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.cardUsuario}>
          <Text style={styles.tituloSecao}>Dados Cadastrados</Text>
          {dadosCadastrados ? (
            <View style={styles.infoContainer}>
              <Text style={styles.textoInfo}><Text style={styles.label}>Nome:</Text> {dadosCadastrados.nome}</Text>
              <Text style={styles.textoInfo}><Text style={styles.label}>Telefone:</Text> {dadosCadastrados.telefone}</Text>
              <Text style={styles.textoInfo}><Text style={styles.label}>CPF:</Text> {dadosCadastrados.cpf}</Text>
              <Text style={styles.textoInfo}><Text style={styles.label}>Curso:</Text> {dadosCadastrados.curso}</Text>
              <Text style={styles.textoInfo}><Text style={styles.label}>Disciplina:</Text> {dadosCadastrados.disciplina}</Text>
              <Text style={styles.textoInfo}><Text style={styles.label}>Descrição:</Text> {dadosCadastrados.descricao}</Text>
            </View>
          ) : (
            <Text style={styles.textoAviso}>Nenhum dado encontrado.</Text>
          )}
        </View>

        <View style={styles.divisor} />

        <View style={styles.cardCriador}>
          <Text style={styles.tituloSecao}>Desenvolvedor</Text>
          <Image 
            source={require('../assets/enzo-foto.jpeg')} 
            style={styles.foto} 
          />
          <Text style={styles.nomeCriador}>Enzo Vaz</Text>
          <Text style={styles.rmCriador}>RM: 561702</Text>
          <Text style={styles.subtexto}>FIAP - 2TDSPF</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  cardUsuario: {
    width: '100%',
    padding: 20,
    backgroundColor: '#1c1c1c',
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
  },
  cardCriador: {
    width: '100%',
    padding: 20,
    backgroundColor: '#1c1c1c',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoContainer: {
    gap: 8,
  },
  label: {
    fontWeight: 'bold',
    color: '#3498db',
  },
  textoInfo: {
    fontSize: 16,
    color: 'white',
  },
  textoAviso: {
    color: '#888',
    textAlign: 'center',
  },
  divisor: {
    height: 30,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'red',
  },
  nomeCriador: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  rmCriador: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
  subtexto: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  }
});