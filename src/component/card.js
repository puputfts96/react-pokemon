import React from 'react';
import './card.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../dist/css/bootstrap.min.css';
import pokemonDatabase from "../pokemonDatabase";

class card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: ''};
        this.removePokemon = this.removePokemon.bind(this);  
    }
    removePokemon(id){
        pokemonDatabase.delete(this.props.ids);
        window.location.assign('/mypokemon/');
    }
    render() {
        const isHome=this.props.status;
        const keys='';
        if (!isHome) {
            keys=this.props.ids;
        }
        return (
           <>
            <div>
                <div className='pokemon-name'>{this.props.name}</div>
                    <img 
                    className='pokemon-image' 
                    src={this.props.image} 
                    ></img>
            </div>
            {console.log(this.props)}
            <div className='buttondivdetail'>
                {isHome=='home' ? ( 
                    <Link to={`/detail/${this.props.ids}`}>
                        <Button color="info" className='buttondetail'>Detail</Button>
                    </Link>
                ):(
                    <Button onClick={this.removePokemon} className='buttondetails'>
                       Lepas Pokemon
                    </Button>
                )}
            </div> 
        </>
        );
    }
}

export default card;