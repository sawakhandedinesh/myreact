import React, { Component } from 'react';

class Table extends Component {
  render() {
    return <div className='container'>
        <div className="row">
            <div className="col">
                <table  className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            {
                                this.props.header.map((element)=>{
                                        return <th>{element}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                this.props.data.map((element)=>{
                                        return <td>{element}</td>
                                })
                            } 
                            </tr>         
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
  }
}

export default Table;