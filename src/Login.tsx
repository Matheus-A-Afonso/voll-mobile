import {VStack, Image, Text, Box, FormControl, Input, Button, Link,}from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';

export default function Login() {
  return (
    <VStack flex={1} alignItems= "center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

        <Text
          fontFamily='public sans'
          fontSize="xl"
          fontWeight="bold"
          color="gray.500"
          textAlign= 'center'
          marginTop={5}
        >
          Faça login em sua conta
        </Text>
        <Box>
          <FormControl mt={3}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder='Insira seu email'
              size='lg'
              width="100%"
              borderRadius='lg'
              backgroundColor='gray.100'
              shadow={3}
            /> 
          </FormControl>
          <FormControl mt={3}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder='Insira sua senha'
              size='lg'
              width="100%"
              borderRadius='lg'
              backgroundColor='gray.100'
              shadow={3}
            /> 
          </FormControl>
        </Box>
        <Button 
          mt={10} 
          size='lg' 
          width="100%" 
          borderRadius='lg' 
          backgroundColor='blue.800'
        > 
          Entrar
        </Button>
        <Link href='https://github.com/Matheus-A-Afonso'
          mt={4}
        >
          Esqueceu sua senha?
        </Link>
        <Box
          mt={2}
          width="100%"
          flexDirection="row"
          justifyContent="center"       
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

