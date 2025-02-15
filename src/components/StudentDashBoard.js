import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const StudentDashBoard = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container my-4">
      <table className="table table table-bordered border-dark">
        <thead>
          <tr>
            <th scope="col">SrNo</th>
            <th scope="col">Student Name</th>
            <th scope="col">Course Name</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Warranty</th>
            <th scope="col">Avaibility</th>
            <th scope="col">Discription</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <tr>
              <th scope="row">{product.id}</th>
              <td>{product.reviews[0].reviewerName}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.discountPercentage}%</td>
              <td>{product.warrantyInformation}</td>
              <td>{product.availabilityStatus}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashBoard;
