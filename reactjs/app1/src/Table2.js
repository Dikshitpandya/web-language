import React from "react";
class Table extends React.Component {
    constructor(props) {
        super(); //must call parent class constructor
        //property variable
        this.srno = props.srno;
        this.name = props.name;
        //create object 
        this.state = {
            punjabi: 0,
            gujarati: 0,
            butter_milk: 0,
            papad: 0,
            total: 0
        }
    }
    updatePunjabi = () => {
        this.setState({
            punjabi: this.state.punjabi + 1
        });
    }
    updateGujrati = () => {
        this.setState({
            gujarati: this.state.gujarati + 1
        });
    }
    updateButterMilk = () => {
        this.setState({
            butter_milk: this.state.butter_milk + 1
        });
    }
    updatePapad = () => {
        this.setState({
            papad: this.state.papad + 1
        });

    }
    updateTotal = () => {
        this.setState({
            total: (this.state.punjabi * 200) + (this.state.gujarati * 100) + (this.state.butter_milk * 10) + (this.state.papad * 5)
        })
    }
    shouldComponentUpdate(nextProperty, previousProperty) {
        console.log("shouldComponentUpdate is called....");
        return true;
    }
    render() {

        return (<div className='col-lg-4 mb-2'>
            <div className='card'>
                <div className='card-header text-bg-danger d-flex justify-content-between'>
                    <span className='h4'>{this.srno}</span>
                    <span className='h4'>{this.name}</span>
                </div>
                <div className='card-body'>
                    <button onClick={() => this.updatePunjabi()} type='button' className='btn btn-danger w-100'>Punjabi Thali = {this.state.punjabi}</button>
                    <button onClick={() => this.updateGujrati()} type='button' className='btn btn-success w-100 mt-2'>Gujarati Thali = {this.state.gujarati}</button>
                    <div className='d-flex justify-content-between'>
                        <button onClick={() => this.updateButterMilk()} type='button' className='btn btn-warning w-50 mt-2'>Butter Milk = {this.state.butter_milk}</button>
                        <button onClick={() => this.updatePapad()} type='button' className='btn btn-info w-50 mt-2'>Papad = {this.state.papad}</button>
                    </div>
                </div>
                <div className='card-footer'>
                    <h5>Total = {this.state.total}</h5>
                </div>
            </div>
        </div>);
    }
    componentDidUpdate(previousProperty, previousState) {
        if (previousState.gujarati !== this.state.gujarati ||
            previousState.punjabi !== this.state.punjabi ||
            previousState.papad !== this.state.papad ||
            previousState.butter_milk !== this.state.butter_milk) {
            // Call updateTotal only when the total has changed
            this.updateTotal();
        }
        if (previousState.gujarati !== this.state.gujarati) {
            // Call the prop function to update the total in the parent component
            this.props.updateGujaratiThaliTotal(this.state.gujarati - previousState.gujarati);
        }

        if (previousState.punjabi !== this.state.punjabi) {
            this.props.updatePunjabiThaliTotal(this.state.punjabi - previousState.punjabi);
        }
    }
}
export default Table