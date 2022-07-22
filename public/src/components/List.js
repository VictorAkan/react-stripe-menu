import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less"

export default function List({tours, removeTour}) {
    return(
        <div>
            <React.Fragment>
            { tours.map((tour) => {
                const { id,name,image,info,price } = tour
                return(
                    <div className="card shadow mt-3" key={id}>
                    <div className="card-head">
                        <img src={image} alt={name} />
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mt-3">
                            <h5>{name}</h5>
                            <h5 className="text-info">{'$' + price}</h5>
                        </div>
                        <p style={{color:'#617d98'}}>
                        <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"Read More"}
                        readLessText={"Read Less"}
                        readMoreClassName={"text-primary"}
                        readLessClassName={"text-primary"}
                        >
                            {info}
                        </ReactReadMoreReadLess>
                        </p>
                        <div>
                            <button onClick={() => removeTour(id)} className="btn btn-outline-danger">Not interested</button>
                        </div>
                    </div>
                    </div>
                )
            })}
            </React.Fragment>
        </div>
    )
}