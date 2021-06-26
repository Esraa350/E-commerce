import React from "react";
import { Link } from "react-router-dom";
import "../css/Form.css";
const CardCategory = ({ categories }) => {
  return (
    <>
      <div className="row m-4">
        {categories.map((category) => (
          <div className="col-3 ">
            <div className="card rounded shadow overflow-hidden  ">
              <img
                src={category.categoryImg}
                className="card-img  cards"
                alt="..."
              />
              <div className="card-body">
                <Link
                  className="btn btn-primary col-12 "
                  to={`/categories/${category._id}`}
                >
                  <span>{category.category}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardCategory;
