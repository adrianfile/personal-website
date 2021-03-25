import React from 'react';
import About from './About';


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

    render(){
        return (
            <>
            <div>
               <div class="home pb-10">
                   <p class="text-center hi">Hello, my name</p>
                   <p class="my_name uppercase">{this.state.nama}</p>
                   <p class="garis"></p>
               </div>
            </div>
            <About />
            </>
        );
    }
};

export default Home;