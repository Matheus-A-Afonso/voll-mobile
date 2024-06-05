import { VStack, Image, Text, Box, }from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
export default function Login() {
  
  const [numSecao, setNumScao] = useState (0);
  const secoes = [
    {
      id: 1,
      titulo: 'Insira seus dados',
      entradaTexto: [
        {
          id: 2,
          label: 'Nome',
          placeholder: 'Insira seu nome'
        },
        {
          id: 3,
          label: 'Email',
          placeholder: 'Insira seu email'
        },
        {
          id: 4,
          label: 'Senha',
          placeholder: 'Insira sua senha'
        },
        {
          id: 5,
          label: 'Repita a senha',
          placeholder: 'Insira sua senha'
        },
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]
  function avancarSecao(){
    setNumScao(numSecao+1)
  }
  return (
     
    <VStack flex={1} alignItems= "center" justifyContent="top" p={5}>
      <Image source={Logo} alt="Logo Voll" />

        <Titulo>
          {secoes[numSecao].titulo}
        </Titulo>     
        <Box>
          {
            secoes [numSecao].entradaTexto.map(entrada => {
              return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} />
            })
          }

        </Box>
          <Botao onPress={() => avancarSecao()}>
            Avançar
        </Botao>
    </VStack>
  );
}

