import {VStack, Image, Text, Box, FormControl, Input, Button, Link,}from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
export default function Login() {
  return (
    <VStack flex={1} alignItems= "center" justifyContent="top" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Insira alguns dados básicos
      </Titulo>
        <Box>
          <FormControl mt={2}>
            <FormControl.Label> Nome </FormControl.Label>
            <EntradaTexto 
            label="Nome"
            placeholder="Insira seu nome"
            />
            
          </FormControl>
          <FormControl mt={2}>
            <FormControl.Label>Email</FormControl.Label>
            <EntradaTexto 
            label="Email"
            placeholder="Insira seu endereço de email"
            />

          </FormControl>
          <FormControl mt={2}>
            <FormControl.Label>Crie uma senha</FormControl.Label>
            <EntradaTexto 
            label="Senha"
            placeholder="Insira sua senha"
            />

             </FormControl>
          <FormControl mt={2}>
            <FormControl.Label>Repita a sua senha</FormControl.Label>
            <EntradaTexto 
            label="Senha"
            placeholder="Insira sua senha"
            />
          </FormControl>

        </Box>
          <Botao>Avançar</Botao>
    </VStack>
  );
}

