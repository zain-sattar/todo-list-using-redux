const todoListStyle={
    body:{
        padding: 0, 
        margin:0,
        overflowY: 'auto',
    },
    todoTaskBoxStyle :{
        height:60,
        marginBottom:'5px',
        backgroundColor:'#fca792',
        display: 'flex',
        alignItems: 'center',
    },
    todoTaskStyle:{
        flexGrow: 1, // Allow the Typography component to grow and take available space
        marginRight: '10px', // Add margin to create spacing between elements
        paddingLeft:'20px',
    },
    completedTaskStyle:{
        textDecoration: 'line-through'
    },
}

export default todoListStyle;
