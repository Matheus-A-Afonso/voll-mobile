import {VStack, Image, Text, Box, FormControl, Input, Button, Link,}from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
export default function Login() {
  
  const secoes = [
    {
      id: 1,
      titulo: 'insira seus dados',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Insira seu nome'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Insira seu email'
        },
        {
          id: 2,
          label: 'Senha',
          placeholder: 'Insira sua senha'
        },
        {
          id: 2,
          label: 'Repita a senha',
          placeholder: 'Insira sua senha'
        },
      ]
    }
  ]

  return (
     
    <VStack flex={1} alignItems= "center" justifyContent="top" p={5}>
      <Image source={Logo} alt="Logo Voll" />

     
        <Box>
          {
            secoes [0].entradaTexto.map(entrada => {
              return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} />
            })
          }

        </Box>
          <Botao>Avançar</Botao>
    </VStack>
  );
}

