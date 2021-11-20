// librarys
import React, { useState, useEffect } from "react";
import Head from "next/head";
import SocketIO from "socket.io-client";

// controllers
import localStorage from "../utils/localStorage";
import apiClient from "../utils/client";

// style
import styles from "../styles/chat.module.scss";

// icons
import Send from "../public/icons/send";
import Message from "../public/icons/message";
import ArrowUp from "../public/icons/arrowUp";
import Dots from "../public/icons/dots";
import Close from "../public/icons/close";

function Chat() {
  const [profile, setProfile] = useState(false);
  const [desc, setDesc] = useState(true);
  const [dataUser, setUser] = useState({ img: "" });
  const [contactUser, setContact] = useState({ img: "" });

  async function getContactData(email) {
    const res = await apiClient.get(
      email === "usuario1@gmail.com"
        ? "user/usuario2@gmail.com"
        : "user/usuario1@gmail.com"
    );

    const res2 = await apiClient.get("user/usuario2@gmail.com");
    setContact(res.data.user);
  }

  // load data
  useEffect(() => {
    getContactData("usuario1@gmail.com");

    const socket = SocketIO(process.env.SERVER_URI, {
      transports: ["websocket"],
    });
    socket.emit("mensaje-del-cliente", "hello");
  }, []);

  return (
    <>
      <Head>
        <title>IVentas | Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index,follow,archive,translate" />
        <meta name="description" content="Chats del usuario" />
      </Head>
      <div className={styles.containerChat}>
        <div className={styles.containerLeft}>
          <div className={styles.containerProfile}>
            <img src={dataUser.img} className={styles.imgUser} />
            <span className={styles.txtName}>{dataUser.name}</span>
            <span className={styles.txtPhone}>{dataUser.phone}</span>
          </div>
          <div className={styles.containerContacts}>
            <Message className={styles.iconMessage} />
            <span>Chat</span>
          </div>
        </div>
        <div className={styles.containerCenter}>
          <div className={styles.topBar}>
            <img src={contactUser.img} className={styles.imgUser} />
            <span>Lucía González</span>
            <div className={styles.iconDots} onClick={() => setProfile(true)}>
              <Dots />
            </div>
          </div>
          <div className={styles.containerMessages}>
            <div className={styles.container}>
              <div className={styles.message}>
                <img src={contactUser.img} className={styles.imgSender} />
                <div className={`${styles.bubble} ${styles.left}`}>
                  <span>Soy Lucía, tengo 38 años</span>
                </div>
              </div>
              <div className={styles.message}>
                <img src={contactUser.img} className={styles.imgSender} />
                <div className={`${styles.bubble} ${styles.left}`}>
                  <span>
                    ¿Qué necesito para contratar su servicio? Me urge cambiarme
                    de proveedor, ya tengo todos mis papeles listos...
                  </span>
                </div>
              </div>
              <div className={`${styles.message} ${styles.right}`}>
                <img src={dataUser.img} className={styles.imgSender} />
                <div className={`${styles.bubble} ${styles.right}`}>
                  <span>Bienvenido</span>
                </div>
              </div>
              <div className={styles.message}>
                <img src={contactUser.img} className={styles.imgSender} />
                <div className={`${styles.bubble} ${styles.left}`}>
                  <span>
                    ¿Qué necesito para contratar su servicio? Me urge cambiarme
                    de proveedor, ya tengo todos mis papeles listos...
                  </span>
                </div>
              </div>
              <div className={styles.message}>
                <img src={contactUser.img} className={styles.imgSender} />
                <div className={`${styles.bubble} ${styles.left}`}>
                  <span>¡Claro! dime por favor, ¿Cuál es tu nombre?</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomBar}>
            <input type="text" placeholder="Escribe un mensaje..." />
            <Send className={styles.btnMessage} />
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.containerProfile}>
            <img src={contactUser.img} className={styles.imgUser} />
            <span className={styles.txtName}>Lucía González</span>
            <span className={styles.txtPhone}>55271273617</span>
            <span className={styles.txtEdit}>Editar datos</span>
          </div>
          <div className={styles.containerInfo}>
            <div className={styles.containerDisplay}>
              <div className={styles.containerHead}>
                <span className={styles.txtDisplay}>Datos del contacto</span>
                <div
                  onClick={() => {
                    setDesc(!desc);
                  }}
                >
                  <ArrowUp className={styles.iconArrow} />
                </div>
              </div>
              {!desc ? null : (
                <dl className={styles.list}>
                  <dt>Notas</dt>
                  <dd>Buen prospecto</dd>
                  <dt>Edad</dt>
                  <dd>{contactUser.age}</dd>
                  <dt>Correo</dt>
                  <dd>{contactUser.email}</dd>
                  <dt>Prioridad</dt>
                  <dd>Alta</dd>
                  <dt>Problema</dt>
                  <dd>{contactUser.problem}</dd>
                  <dt>Promoción</dt>
                  <dd>{contactUser.promote}</dd>
                  <dt>CURP</dt>
                  <dd>{contactUser.curp}</dd>
                </dl>
              )}
            </div>
          </div>
        </div>
        {!profile ? null : (
          <div className={styles.containerOptions}>
            <div className={styles.content}>
              <div
                className={styles.containerBtn}
                onClick={() => {
                  setProfile(false);
                }}
              >
                <Close className={styles.btnClose} />
              </div>
              <div className={styles.containerProfile}>
                <img
                  src={contactUser.img}
                  alt="Profile"
                  className={styles.imgProfile}
                />
                <span className={styles.txtName}>Lucía González</span>
                <span className={styles.txtPhone}>55271273617</span>
              </div>
              <div className={styles.containerInfo}>
                <div className={styles.containerDisplay}>
                  <div className={styles.containerHead}>
                    <span className={styles.txtDisplay}>
                      Datos del contacto
                    </span>
                    <ArrowUp className={styles.iconArrow} />
                  </div>
                  <div className={styles.containerList}>
                    <dl className={styles.list}>
                      <dt>Notas</dt>
                      <dd>Buen prospecto</dd>
                      <dt>Edad</dt>
                      <dd>{contactUser.age}</dd>
                      <dt>Correo</dt>
                      <dd>{contactUser.email}</dd>
                      <dt>Prioridad</dt>
                      <dd>Alta</dd>
                      <dt>Problema</dt>
                      <dd>{contactUser.problem}</dd>
                      <dt>Promoción</dt>
                      <dd>{contactUser.promote}</dd>
                      <dt>CURP</dt>
                      <dd>{contactUser.curp}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Chat;
