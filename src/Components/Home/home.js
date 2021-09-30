import React, { Fragment} from 'react';
/* import { AuthContext } from "../Auth/AuthProvider"; */
import { Card } from '../../../src/context'

export default function Home() {
/*     const auth = React.useContext(AuthContext);
    let user = auth.users.filter(user => user.isLogedU === true)
    let index;
    if (user.length > 0) {
        index = auth.users.indexOf(user[0])
      } */
    return (
        <Fragment>
           {/*  {user[0].isLogedU && <h2> Welcome {auth.users[index].name} </h2>} */}
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