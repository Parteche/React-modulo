import React, {Component, Fragment} from 'react';

class LuzClase extends Component {

//Es como un objeto, agrupa
    constructor(){
        super(); //sirve para heredar informacion, tipo de estructura
        this.state = {
            color: 'pink'
        }
    }

render(){
    return(
        <Fragment>
            <div style={{backgroundColor: this.state.color }} className='luz'>

            </div>
        </Fragment>
        );
    }
};

export default LuzClase ;