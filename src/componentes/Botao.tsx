import { Button } from "native-base";

export function Botao({children, ...rest}){
    return(
        <Button 
        mt={10} 
        size='lg' 
        width="100%" 
        borderRadius='lg' 
        backgroundColor='blue.800'
        {...rest}
      > 
         {children}
      </Button>
    )
}