import { VStack, Image, Text, Box, Checkbox }from 'native-base'
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
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira seu endereço'
        },
        {
          id: 3,
          label: 'Endereço',
          placeholder: 'Insira seu endereço'
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Insira seu complemento'
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'
        },
      ],
      checkbox: []      
    },
    {
      id: 3,
      titulo: 'Para finalizar selecione seus planos',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamericá'
        },
        {
          id: 2,
          value: 'Unimed'
        }    
      ],
    }
  ]

  function avancarSecao(){
    if(numSecao < secoes.length -1){
      setNumScao(numSecao + 1);
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumScao(numSecao - 1);
    }
  }

  return (
     
    <VStack flex={1} alignItems= "center" justifyContent="top" p={5}>
      <Image source={Logo} alt="Logo Voll" />

        <Titulo>
          {secoes[numSecao].titulo}
        </Titulo>     
        <Box>
          {
            secoes [numSecao]?.entradaTexto?.map(entrada => {
              return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} />
            })
          }

        </Box>
            
        <Box>
        {
          secoes [numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
        } 

        </Box>
        {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400" >
           Voltar
        </Botao>}
          <Botao onPress={() => avancarSecao()} mt={5}>
            Avançar
        </Botao>
    </VStack>
  );
}

