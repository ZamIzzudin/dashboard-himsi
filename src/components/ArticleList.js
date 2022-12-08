import React from "react";
import dummy from "../assets/DummyData";

const List = () => {
    return (
        <div className="mx-3">
            {dummy.map((data, index) => {
                return (
                    <div key={index} >
                        <p>Data ke- {index}</p>
                        <p>{data.Title}</p>
                        <p>{data.Category}</p>
                        <p>{data.Body}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default List;