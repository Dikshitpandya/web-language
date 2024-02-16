import React from "react";
import ReactDOM from 'react-dom';

import ReactDOM from 'react-dom/client';

class cricket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viratkohli: 0,
            rohitsharma: 0,
        }
    }
    render() {
        return (<div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header, text-bg-primary">
                                <h1>scoor board</h1>
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
                                            <input type="number" min={0} max={6} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="run" className="form-label">run</label>
                                            <input type="number" min={0} max={6} />
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< cricket/>)

ReactDOM.render(<Cricket />, document.getElementById('root'));
