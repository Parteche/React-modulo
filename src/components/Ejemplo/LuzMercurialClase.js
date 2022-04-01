import React, {Fragment , Component} from "react";

class LuzMercurialClase extends Component {
    constructor(){
        super();
        this.state = {
            color: 'pink'
        }
    }

render(){
    return (
        <Fragment>

        <div className="LuzMercurial"
                style={{backgroundColor: this.state.color}}
        />
        </Fragment>

    );
}

};

export default LuzMercurialClase;