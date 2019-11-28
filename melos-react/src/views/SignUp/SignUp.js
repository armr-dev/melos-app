import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import RegularButton from "components/CustomButtons/Button";
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import logo from 'logo.svg'
import { primaryColor } from "assets/jss/material-dashboard-react.js"

const useStyles = makeStyles(styles);

export default function SignUp(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = React.useState({
      checked: false
    })

    const handleCheckChange = name => event => {
      setState({...state, [name]: event.target.checked});
    }
    
    return (
    <div style={{flexDirection:'column', alignItems:'center', justifyContent:'center', display:'flex'}}>
      <Card>
          <CardBody color="primary">
              <img src={logo} style={{ width:'40%', marginTop:'20px' }}/>
              <CustomInput
                formControlProps={{
                  className: classes.margin + " " + classes.CustomInput
                }}
                inputProps={{
                  placeholder: "Nome",
                  inputProps: {
                    "aria-label": "Nome"
                  }
                }}
                />
              <CustomInput
                formControlProps={{
                  className: classes.margin + " " + classes.CustomInput
                }}
                inputProps={{
                  placeholder: "Email",
                  inputProps: {
                    "aria-label": "Email"
                  }
                }}
                />
              <CustomInput
                formControlProps={{
                  className: classes.margin + " " + classes.CustomInput
                }}
                inputProps={{
                  placeholder: "Senha",
                  inputProps: {
                    "aria-label": "Senha"
                  }
                }}
                />
              <CustomInput
                formControlProps={{
                  className: classes.margin + " " + classes.CustomInput
                }}
                inputProps={{
                  placeholder: "Confirmar senha",
                  inputProps: {
                    "aria-label": "confirmaSenha"
                  }
                }}
                />
              <CustomInput
                formControlProps={{
                  className: classes.margin + " " + classes.CustomInput
                }}
                inputProps={{
                  placeholder: "CPF",
                  inputProps: {
                    "aria-label": "CPF"
                  }
                }}
                />
              <FormControlLabel style={{marginTop:'16px'}}
                control={
                <CheckBox 
                  checked={state.checked}
                  onChange={handleCheckChange('checked')}
                  value='checked'
                  style={{color:primaryColor[0], flex:'1'}}
                  />
              }
              label="Aceito os termos de uso e política de privacidade"
              />
              <Link to='/admin/login'>
              <RegularButton 
                style={{width:'80%', margin:'25px'}}
                color={'primary'}
                size={'lg'}
                round={true}
                className={"SignUpButton"}>
                  Cadastrar
              </RegularButton>
              </Link>                                         
          </CardBody>
        </Card>
      </div>
      );
    }
