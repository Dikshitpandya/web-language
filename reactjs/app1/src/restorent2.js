import Table from "./Table2";
import React from "react";
class Resturant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GujaratiThaliTotal: 0,
            PunjabiThaliTotal: 0,
        }
    }
    updateGujaratiThaliTotal = (total) => {
        this.setState({
            GujaratiThaliTotal: this.state.GujaratiThaliTotal + total
        });
    }

    updatePunjabiThaliTotal = (total) => {
        this.setState({
            PunjabiThaliTotal: this.state.PunjabiThaliTotal + total
        });
    }
    render() {
        return (<div>
            <div className='container'>
                <div className='row'>
                    <h1>Shreeji Resturant</h1>
                    <h5>Gujarati thali total {this.state.GujaratiThaliTotal}</h5>
                    <h5>Punjabi thali total {this.state.PunjabiThaliTotal}</h5>
                </div>
                <div className='row mt-2'>
                    <Table srno='1' name='poojaben' updateGujaratiThaliTotal={this.updateGujaratiThaliTotal} updatePunjabiThaliTotal={this.updatePunjabiThaliTotal} />
                    {/* create Table class object using constructor. */}

                    <Table srno='2' name='vidhiben' updateGujaratiThaliTotal={this.updateGujaratiThaliTotal} updatePunjabiThaliTotal={this.updatePunjabiThaliTotal} />

                    <Table srno='3' name='mohan bhai' updateGujaratiThaliTotal={this.updateGujaratiThaliTotal} updatePunjabiThaliTotal={this.updatePunjabiThaliTotal} />

                    <Table srno='4' name='suketu bhai' updateGujaratiThaliTotal={this.updateGujaratiThaliTotal} updatePunjabiThaliTotal={this.updatePunjabiThaliTotal} />
                </div>
            </div>
        </div>);
    }
}
export default Resturant; //required