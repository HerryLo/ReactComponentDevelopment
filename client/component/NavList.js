import React from 'react';
import { Link } from "react-router-dom";

class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'toast',
            navList: [
                {
                   type: 'toast',
                   text: 'toast组件',
                   location: "/"
                },
                {
                    type: 'modal',
                    text: 'modal组件',
                    location: "/modal"
                },
                {
                    type: 'lazyimg',
                    text: 'lazyImg组件',
                    location: "/lazyimg"
                }
            ]
        }
    }

    render() {
        let { type, navList } = this.state;
        return (
            <div className="flexDiv">
                {
                    navList.map(item => {
                        return(
                            <div 
                                key={item.type}
                                className={item.type == type?'active':''}>
                                <Link to={item.location}>{item.text}</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default NavList