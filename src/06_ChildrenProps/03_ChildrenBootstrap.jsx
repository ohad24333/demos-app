import React from "react";


function Card(props) {

    return (

        <div className="card text-white bg-success mb-3" style={{ maxWidth: "20rem" }} >
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.children}
            </div>
        </div>

    );
}
export default function Cards(props) {

    return (
        <>
            <Card key="2" header="header-1">
                <h4 className="card-title">Success card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </Card>
            <Card key="2" header="header-2">



                <div className="form-group">
                    <label for="exampleSelect1" className="form-label mt-4">Example select</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="exampleTextarea" className="form-label mt-4">Example textarea</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>

            </Card>

        </>
    );

}

