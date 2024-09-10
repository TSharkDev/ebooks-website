import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import contact from "../assets/icons/contact.jpg"
import EmailIcon from '@mui/icons-material/Email';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99th9h6",
        "template_winbn66",
        form.current,
        "sGiiFdeWzgfXWOkB0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenSnackbar(true);
          setSnackbarMessage("Transmitted flawlessly!");
          setSnackbarSeverity("success");
        },
        (error) => {
          console.log(error.text);
          setOpenSnackbar(true);
          setSnackbarMessage("Failed to send email.");
          setSnackbarSeverity("error");
        }
      );
  };
  function handleMail() {
    window.location.href = `mailto:${"findnagraj@gmail.com"}`;
  }
  return (
    <div>
      <Navigation />
      <h2 className="contactpage--title">Contatos & Copyright</h2>
      <div className="contact--home">
        <div className="contact--container">
          <h3 className="contact--title">SEPROMI ao seu serviço!</h3>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="contact-form"
            autoComplete="off"
          >
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                className="contact--input"
                type="text"
                name="user_name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                // placeholder="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className="contact--input"
                type="email"
                name="user_email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                // placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                // placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="contact--button" value="Send">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="send--text">Enviar</span>
            </button>
          </form>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        
      </div>
      <div className="information--card">
        <h2 className="information--card--title">Detalhes do Contatos</h2>
        <p className="information--para">E-mail: sepromiba@ba.gov.br.com <br /> 
        Com sede na Pituba, SSA</p>
        <div>
          <img src={contact} alt="contact" className="contact--illustration" />
        </div>
      </div>
      </div>
      <div className="copyright--container">
      <div className="copyright--card">
        <h2 className="copyright--title">Copyright</h2>
        <p className="copyright--para">
        Todas as fotos e e-books apresentados no aplicativo web foram obtidos
          da internet. Gostaria de deixar claro que não reivindico
          qualquer propriedade ou direito autoral sobre esses materiais. Eles são usados ​​exclusivamente
          para fins informativos e educacionais em nossa plataforma. Nos somos
          grato aos criadores originais por compartilharem seu trabalho on-line, e oque
          fizeram todos os esforços para creditar e reconhecer suas contribuições
          sempre que possível. Se algum detentor de direitos autorais acreditar que seus direitos
          foram violadas, por favor entre em contato conosco para que eu possa resolver imediatamente
          a preocupação.
        </p>
        <div>
          <div className="email--icon">
            <EmailIcon onClick={handleMail}/>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
