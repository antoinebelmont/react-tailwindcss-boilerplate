import * as React from "react";
import MainGuest from "./MainGuest";
import Logo from "-!svg-react-loader!../assets/logo_banner.svg";

export default function Register() {
  return (
    <MainGuest>
      <div className="w-4/12 grid place-items-center">
        <Logo className="" height={"20vh"} />
      </div>
      <div className="w-6/12 grid place-items-center  leading-none">
        <div>
          <span className="register">Registra</span> <br />
          <span className="your-bicycle">tu bicicleta</span>
          <p className="join mt-6">
            <span className="community">Unete a nuestra comunidad</span> de
            registro de bicicletas
            <br /> y ayuda a contrarestar el robo de unidades en tu ciudad.
          </p>
        </div>
      </div>
      <div className="flex grid place-items-center w-4/12">
        <div className="form flex flex-col ">
          <input
            type="text"
            name=""
            id=""
            placeholder="e.j. soyyo@elmejor.com"
            className="text-box"
          />
          <label htmlFor="" className="register-labels">
            Correo electrónico
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="8 caractéres como minimo"
            className="text-box"
          />
          <label htmlFor="" className="register-labels">
            Contraseña
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder=""
            className="text-box"
          />
          <label htmlFor="" className="register-labels">
            Confirmar contraseña
          </label>
          <div className="checks">
            <div>
              <input type="checkbox" className="register-check" name="" id="" />
              <label htmlFor="" className="ml-2">
                Acepto términos y condiciones
              </label>
            </div>
            <div>
              <input type="checkbox" className="register-check" name="" id="" />
              <label htmlFor="" className="ml-2">
                Deseo recibir noticias
              </label>
            </div>
          </div>
          <button className="userActionButton">Registrarme</button>
        </div>
      </div>
    </MainGuest>
  );
}
