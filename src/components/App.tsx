import * as React from 'react';

export interface HolaMundoProps{
    name: string;
    tool: string;
}

export class HolaMundo extends React.Component<HolaMundoProps, any>{
    render(){
        const {name,tool} = this.props;
        return <h1>Hola <span className="text-red-500">{name}</span>! tu <label htmlFor="" className="text-yellow-700">{tool}</label> funciona!</h1>
    }
}