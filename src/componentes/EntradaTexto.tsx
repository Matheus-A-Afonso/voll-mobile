import { Input } from "native-base";

export function EntradaTexto({ ...rest}){
    return(
        <Input
        size='lg'
        width="100%"
        borderRadius='lg'
        backgroundColor='gray.100'
        shadow={3}
        {...rest}
      >
        
      </Input>
      
    )

}