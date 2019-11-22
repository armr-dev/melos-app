import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import RegularButton from "components/CustomButtons/Button";
import logo from 'logo.svg'
import { Button } from "@material-ui/core";
import { primaryColor } from "assets/jss/material-dashboard-react.js"
import { Link } from 'react-router-dom'

const useStyles = makeStyles(styles);

export default function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    
    const handleClickSignUp = event => {


    }

    return (
      <form onSubmit={handleSubmit}>
        <div style={{flexDirection:'column', alignItems:'center', justifyContent:'center', display:'flex'}}>
          <Card>
              <CardBody color="primary">
                <div style={{marginTop:'40px', marginBottom:'20px'}}>
                  <img src={logo}/>
                </div>
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
                  <RegularButton
                    type='submit' 
                    style={{width:'80%', margin:'25px'}}
                    color={'primary'}
                    size={'lg'}
                    round={true}
                    className={"LoginButton"}>
                      Login
                  </RegularButton>
              </CardBody>
          </Card>
        <div style={{flex:'1', flexDirection:'column', alignItems:'center', justifyContent:'center', display:'flex'}}>
            Ainda não é cadastrado?
        </div>
        <Link to='/admin/signup'>
          <Button href=''
                  onClick={handleClickSignUp} 
                  style={{color:primaryColor[0], flex:'1'}}>
                    Cadastre-se!
          </Button>
        </Link>

        </div>
      </form>

      );
    }
