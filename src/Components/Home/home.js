import React, { Fragment} from 'react';
/* import { AuthContext } from "../Auth/AuthProvider"; */
import { Card } from '../../../src/context'

export default function Home() {

    return (
        <Fragment>
           
            <Card
                bgcolor="black"
                txtcolor='white'
                header='Landing Page'
                title='Welcome to your Bank'
                text='You can use this Bank'
                body={(<img src='bank.png' className='img-fluid'
                alt="Responsive" fill= 'red' />)}
            />
        </Fragment>
    )
}