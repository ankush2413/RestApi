import Alert from '@mui/material/Alert';

function Error(props){

    return (
        <Alert severity="error">{props.message}</Alert>
    )
}

export default Error;