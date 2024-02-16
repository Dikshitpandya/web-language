import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class ExtraItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           ball:0,
           run:0,
           strikerate:0,

        }
    }

    updaterun = (event) => {
        this.setState({
            run: event.target.value
        });
    }
    updateball = (event) => {
        this.setState({
            ball: event.target.value
        });
    }
    strikerate = (event) => {
        this.setState({
             strikerate : (this.state.run * 100) / this.state.ball
        })
    }
    render() {
        return (<div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header, text-bg-primary text-center shadow h1">
                                scoor board
                            </div>
                            <div className="card-body">
                                <form action>
                                    <div className="row">
                                        <div className="col">
                                            <input type="radio" name="JTP" id="virat" defaultValue="summer" />virat<br />
                                            <input type="radio" name="JTP" id="rohit" defaultValue="winter" />rohit<br />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="ball" className="form-label">ball</label>
                                            <input onBlur={this.updateball} type="number" min={0} max={6} id="ball" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="run" className="form-label">run</label>
                                            <input onBlur={this.updaterun} type="number" min={0} max={6} id="run"/>
                                        </div>
                                        <div className="col">
                                            <input type="submit" defaultValue="Add" className="btn btn-primary w-100" />
                                        </div>
                                    </div>
                                </form>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <h3>total</h3>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-end">Name</th>
                                            <th className="text-end">ball</th>
                                            <th className="text-end">run</th>
                                            <th className="text-end">strike rate</th>
                                            <div>strike :- {this.state.strikerate}</div>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
root.render(<ExtraItems />)