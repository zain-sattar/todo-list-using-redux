const style={
    cardStyle:{
        width: 500,
        height: 700,
        margin: 'auto',
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#fa8569',
        color: 'white',
        boxShadow: '-10px -10px 7px rgba(0, 0, 0, 0.2)',
    },
    dividorStyle:{
        backgroundColor:'white',
        marginBottom:'10px',
    }
    ,
    footerStyle:{
        marginTop: 'auto',
        paddingLeft: '20px',
        paddingBottom:'20px',
    },
    body:{
        padding: 0, 
        margin:0,
    },
    TextFieldStyle:{
        height:52,
        backgroundColor:'white',
        '& div': {
            height: '100%', // Set the height of the input to 100% of the parent container
            padding: '5px',
        }
    },
    buttonStyle:{
        height:"52px",
        marginLeft:'8px',
        color:'white',
        borderColor:'white'
    },
    errorStyle:{
        color:'white',
    },
    boxStyle :{
        width: '100%',
        paddingTop: '10px',
        paddingBottom:'10px',
        marginTop:'5px',
        backgroundColor:'#fca792',
        display: 'flex',
        alignItems: 'center',
    },
    typographyStyle:{
        flexGrow: 1, // Allow the Typography component to grow and take available space
        marginRight: '10px', // Add margin to create spacing between elements
        paddingLeft:'5px',
    },
    completedTaskStyle:{
        textDecoration: 'line-through'
    }
}

export default style;