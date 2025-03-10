import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        };
        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
       console.log(this.props.name + "Child Component DidMount");
       const data = await fetch("https://api.github.com/users/nitin-003");
       const json = await data.json();
       
       this.setState({
        userInfo: json,
       });

       console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {

        const {name, location, avatar_url} = this.state.userInfo;

        console.log(this.props.name + "Child Render");

        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @nitin_003</h4>
            </div>
        )
    }
}

export default UserClass




