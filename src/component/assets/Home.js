import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nama : 'adrian hartanto',

        }
    }

    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'landing-page';
    }
    componentWillUnmount() {
        document.getElementsByTagName('body')[0].className = '';
    }

    render(){
        return (
            <div>
               <div class="home">
                   <p class="text-center hi">Hello, my name</p>
                   <p class="my_name uppercase">{this.state.nama}</p>
                   <p class="garis"></p>
               </div>
            </div>
        );
    }
};

export default Home;