import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedTextInput } from 'react-native-mask-text';
import { router } from 'expo-router';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await AsyncStorage.getItem('dadosFormulario');
      if (dados) {
        const parsed = JSON.parse(dados);
        setNome(parsed.nome || '');
        setTelefone(parsed.telefone || '');
        setCpf(parsed.cpf || '');
        setCurso(parsed.curso || '');
        setDisciplina(parsed.disciplina || '');
        setDescricao(parsed.descricao || '');
      }
    };
    carregarDados();
  }, []);

  const gerenciarEnvio = async () => {
    console.log("Botão clicado!");
    console.log("Dados atuais:", { nome, telefone, cpf, curso, disciplina, descricao });

    if (!nome || !telefone || !cpf || !curso || !disciplina || !descricao) {
      console.log("Erro: Caiu na validacao de campos vazios.");
      Alert.alert('Atenção', 'Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    const dados = { nome, telefone, cpf, curso, disciplina, descricao };
    await AsyncStorage.setItem('dadosFormulario', JSON.stringify(dados));
    
    console.log("Tudo salvo. Redirecionando para o perfil...");
    router.push('/perfil');
  };

  const reiniciarFormulario = () => {
    setNome('');
    setTelefone('');
    setCpf('');
    setCurso('');
    setDisciplina('');
    setDescricao('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerForm}>
          <Text style={styles.titulo}>CheckPoint 2 - Mobile</Text>
        
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome completo'
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Telefone: </Text>
          <MaskedTextInput
            mask="(99) 99999-9999"
            style={styles.input}
            placeholder='(00) 00000-0000'
            keyboardType="numeric"
            value={telefone}
            onChangeText={setTelefone}
          />

          <Text style={styles.label}>CPF: </Text>
          <MaskedTextInput
            mask="999.999.999-99"
            style={styles.input}
            placeholder='000.000.000-00'
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />

          <Text style={styles.label}>Curso: </Text>
          <TextInput
            style={styles.input} 
            placeholder='Ex: CyberSecurity'
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.label}>Disciplina: </Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: Java Advanced'
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.label}>Apresentação: </Text>
          <TextInput
            style={styles.input}
            placeholder='Insira uma breve descrição sobre você'
            multiline={true}
            numberOfLines={3}
            value={descricao}
            onChangeText={setDescricao}
            submitBehavior='blurAndSubmit'
            returnKeyType='done'
          />

          <TouchableOpacity 
            style={styles.btnEnviar} 
            onPress={gerenciarEnvio}
          >
            <Text style={styles.txtBotao}>Salvar e Enviar</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 15 }}> 
            <TouchableOpacity 
              style={styles.btnReiniciar} 
              onPress={reiniciarFormulario}
            >
              <Text style={styles.txtBotao}>Reiniciar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20
  },
  containerForm:{
    marginBottom: 20,
    width: '100%',
  },
  titulo:{
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    marginVertical: 40,
  },
  input:{
    backgroundColor: 'white',
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    fontSize: 17,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 25,
  },
  label:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  btnEnviar: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#3498db',
  },
  btnReiniciar: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'red',
  },
  txtBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});