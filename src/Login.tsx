import {VStack, Image, Text, Box, FormControl, Input, Button, Link,}from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
export default function Login() {
  return (
    <VStack flex={1} alignItems= "center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Faça Login em sua conta
      </Titulo>
        <Box>
          <FormControl mt={3}>
            <FormControl.Label> Email </FormControl.Label>
            <EntradaTexto 
            label="Email"
            placeholder="Insira seu endereço de email"
            />
          </FormControl>
          <FormControl mt={3}>
            <FormControl.Label>Senha</FormControl.Label>
            <EntradaTexto 
            label="Senha"
            placeholder="Insira sua senha"
            />
          </FormControl>
        </Box>
          <Botao>Entrar</Botao>
        <Link href='https://github.com/Matheus-A-Afonso'
          mt={4}
          color="blue.500"
        >
          Esqueceu sua senha?
        </Link>
        <Box
          mt={4}
          width="100%"
          flexDirection="row"
          justifyContent="center"
          fontWeight="bold"  
        >
          <Text>Ainda não tem cadastro?</Text>
          <TouchableOpacity>
            <Text
            marginLeft={1}
            color="blue.500"
            fontWeight="black"
            >              
              Faça seu cadastro</Text>
          </TouchableOpacity>
        </Box>
    </VStack>
  );
}

