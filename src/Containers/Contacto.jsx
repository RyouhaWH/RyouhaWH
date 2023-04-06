import React from "react";
import { ContactoImg } from "../Constants/img";
import { motion } from "framer-motion";
import FormInput from "../Components/FormInput";
import FormTextarea from "../Components/FormTextarea";
import ReCAPTCHA from "react-google-recaptcha";
import Wsp from "../Components/Wsp";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Contacto = () => {
  const recaptchaRef = React.createRef();

  const motionPadre = {
    inicio: false,
    final: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };
  const motionHijo = {
    inicio: { opacity: 0, y: -20 },
    final: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "anticipate" },
    },
  };

  const formFields = {
    nameField: {
      id: "name",
      type: "text",
      label: "Su Nombre",
      placeholder: "Ingrese su nombre . . . ",
    },
    emailField: {
      id: "email",
      type: "text",
      label: "Su email",
      placeholder: "Ingrese su correo electrónico . . . ",
    },
    subjectField: {
      id: "subject",
      type: "text",
      label: "Asunto",
      placeholder: "¿ Cuál es el motivo de su mensaje ?",
    },
    messageField: {
      id: "message",
      label: "Su Mensaje",
      placeholder: "Escríbanos aquí su mensaje...",
    },
  };

  // const { data, setData, post, processing, errors, reset} = useForm({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //     "g-recaptcha-response": "",
  // });

  // const FieldHandler = (e) => {
  //     setData(e.target.id, e.target.value);
  // };

  // const HandlerSubmit = (e) => {
  //     e.preventDefault();
  //     recaptchaRef.current.reset();
  //     post("/contactar", {
  //         preserveScroll: true,
  //         onSuccess: () => {
  //             reset('name', "email", "subject", "message", "g-recaptcha-response");

  //             alert('se ha enviado el mensaje');
  //         },
  //     });
  // };

  // if(processing){
  //     console.log(processing)
  // }

  const texto = {
    title: "Contáctanos",
    subtitle: "¡No dudes en Consultarnos cualquier duda, o Escribenos si quieres pedir un prototipo!",
  };

  return (
    <section id="contacto" className="relative">
      <div
        className="absolute w-full h-[100%] -z-10"
        style={{
          backgroundImage: "url(" + ContactoImg + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "anticipate" },
        }}
        viewport={{ once: true }}
        className="max-w-screen-md px-4 py-8 mx-auto lg:py-16 "
      >
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 overflow-hidden text-4xl font-extrabold tracking-tight text-center text-gray-50">
            {texto.title}
          </h2>
          <p className="overflow-hidden text-center text-gray-300 sm:text-xl">{texto.subtitle}</p>
        </div>

        <div className="-mt-12 flex items-center justify-center max-w-lg mx-auto  rounded shadow px-12 py-16 gap-4 flex-col">
          <a
            className=" px-8 py-4 rounded bg-[#25D366] hover:bg-[#29ac59] text-white flex gap-2 w-[250px] items-center justify-between"
            href=""
          >
            <AiOutlineWhatsApp fontSize={30} color="#fff" />
            <p>Contactar What'sapp</p> 
          </a>
          <a
            className=" px-8 py-4 rounded bg-cyan-600 hover:bg-cyan-700 text-white flex gap-2 w-[250px] items-center justify-start"
            href=""
          >
            <AiOutlineMail fontSize={30} color="#fff" />
            <p>Enviar Correo</p> 
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Contacto;
