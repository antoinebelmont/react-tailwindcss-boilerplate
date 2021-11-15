import * as React from 'react';
import Logo from '-!svg-react-loader!../assets/logo_header.svg';

export default function Header(){
    return(
        <section id="header" className="flex .shadow-outline">
            <Logo width={250} className="w-1/6 ml-5 text-primary logo"/>
            <div id="spacer" className="w-1/2"></div>
            <div className="menu-items w-2/6 flex justify-end mr-5">
                <a href="" className="menu-item">Bicicletas robadas</a>
                <a href="" className="menu-item">Como funciona repubi</a>
                <a href="" className="menu-item">Ingresa</a>
            </div>
        </section>
    );
}