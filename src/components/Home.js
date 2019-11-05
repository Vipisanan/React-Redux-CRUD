import React from "react";
import {getData} from "../restServices/HomeService";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }

    componentDidMount() {
        getData()
            .then((res) => {
                if (res.status === 200 && res.data && res.data.content) {
                    console.log(res.data);
                    this.setState({
                        isLoading: false
                    });
                    console.log(res.data);
                    // console.log(res.data.content[1].owner);
                } else {
                    this.setState({
                        isLoading: false
                    });
                    console.log("in App.js file if No" + res);
                }
            })
            .catch((error) => {
                this.setState({
                    isLoading: false
                });
                console.log("in App.js file error" + error);
            });
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                {/*table*/}

                <table className="table container">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>

                <button data-toggle="modal"
                        data-target="#myDeleteModal"
                        className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i>
                PopUp</button>

                {/*    Delete Team Model start*/}
                <div className="modal fade" id="myDeleteModal" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">m</h4>
                            </div>
                            <div className="modal-body">
                                Are you sure want to Delete this team?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button"
                                        onClick={this.deleteNews} className="btn btn-danger">Yes Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
