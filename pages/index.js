// librarys
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// controllers
import apiClient from "../utils/client";
import localStorage from "../utils/localStorage";

// components
import Loading from "../components/Loading";

// style
import styles from "../styles/Index.module.scss";

// icons
import User from "../public/icons/user";
import UserSimple from "../public/icons/userSimple";

function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // loading state
  const [loginFailed, setLoginFailed] = useState(false); // error message

  // validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("correo invalido")
      .required("campo requerido")
      .label(),
    password: Yup.string().required("campo requerido").label(),
  });

  const handleLogin = async (e) => {
    try {
      e.preventDefault(); // prevent reload

      const data = {
        email: e.target.txtEmail.value,
        password: e.target.txtPassword.value,
      };

      const res = await apiClient.post("/login", data);
      if (res.status === 200) {
        localStorage.setUser(res.data.user);
        router.push("/chat");
      } else throw new Error("invalido");
    } catch (err) {
      setLoginFailed(true);
    }
  };

  return (
    <>
      <Head>
        <title>IVentas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index,follow,archive,translate" />
        <meta
          name="description"
          content="Prueba para IVentas @Emmanuel Omar Alatorre León"
        />
      </Head>
      <Loading loading={loading} />
      <div className={styles.containerLogin}>
        <div className={styles.containerLeft}>
          <div>
            <User className={styles.user} />
            <UserSimple className={styles.userSimple} />
          </div>
        </div>
        <div className={styles.containerRight}>
          <h1>Iniciar sesión</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
          >
            <Form
              className={styles.containerForm}
              onSubmit={async (e) => {
                setLoading(true);
                await handleLogin(e);
                setLoading(false);
              }}
            >
              <div className={styles.containerInputs}>
                {loginFailed && (
                  <span className={styles.errorMessage}>
                    Correo o contraseña incorrectos
                  </span>
                )}
                <span className={styles.fieldEmail}></span>
                <input
                  name="txtEmail"
                  className={styles.inputCorreo}
                  placeholder="Ingresa tu correo"
                  type="text"
                  required
                />
                <span>Contraseña</span>
                <input
                  name="txtPassword"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  required
                />
              </div>
              <button type="submit">Iniciar sesión</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
