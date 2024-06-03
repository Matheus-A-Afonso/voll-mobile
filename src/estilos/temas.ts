import { extendTheme } from "native-base";  
import colors from "native-base/lib/typescript/theme/base/colors";

export const Temas = extendTheme ({
    colors: {
        gray: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339cff',
            800: '#0b3b60'
        },
        white: '#fff',
        black: '#000',  
    },
    fontSizes:{
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
    }
})