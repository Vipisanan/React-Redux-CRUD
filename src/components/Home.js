import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }

    render() {
        return (
            <div>
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
                                <h4 className="modal-title" id="myModalLabel"></h4>
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
