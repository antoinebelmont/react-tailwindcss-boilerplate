import * as React from 'react';

type Props = {
    children: JSX.Element[]
}
export default function MainGuest({children}: Props) {
    return(
        <section id="register" className="flex ">
            {children}
        </section>
    );
}