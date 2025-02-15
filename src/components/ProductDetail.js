import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  if (!product) return;

  return (
    <div className="container mt-5">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} className="img-fluid" alt={product.title} />
      <p>{product.description}</p>
      <p>
        <strong>category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Discount:</strong> {product.discountPercentage}%
      </p>
      <p>
        <strong>Warranty:</strong> {product.warrantyInformation}
      </p>
      <p>
        <strong>Avaibility:</strong> {product.availabilityStatus}
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Courses
      </Link>
    </div>
  );
};

export default ProductDetail;
