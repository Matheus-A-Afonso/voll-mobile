import {Text} from 'native-base'


export function Titulo ({children, ...rest}){
    return(
        <Text
        fontSize="xl"
        fontWeight="black"
        color="gray.500"
        textAlign= 'center'
        marginTop={5}
        {...rest}
      >
        {children}
      </Text>
    )
}