import { Component } from "react";
// import UserClass from "./UserClass"
import User from "./User";



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent component Did Mount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div className="About">
                <h1>Hey About Page class base Component is here</h1>
                {/* <UserClass name={"First"} /> */}
                <User name={"First"}/>
            </div>

        )
    }
}

export default About