import {createMuiTheme} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal';


const theme = createMuiTheme({
    palette: {
        primary:{
            main: teal[800]
        },
        secondary:{
            main: "#C1EF77"
        },
        confirmed:{
            main: "#ffff00"
        },
        recovered:{
            main: "#00e676"
        },
        deaths:{
            main: "#d50000"
        },

    }

})

export default theme;