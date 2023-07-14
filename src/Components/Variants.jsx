import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Variant from "./Variant";
import "../../src/Variants.css";

const Variants = () => {
  const [addvariant, setAddvariant] = useState(false);
  const [value, setValue] = useState("");
  const [variants, setVariants] = useState([]);

  const addVariant = () => {
    setAddvariant(true);
  };

  const closeAddVariant = () => {
    setAddvariant(false);
  };

  const addHandler = (value) => {
    if (value.length > 0) {
      // setVariants([...variants, { id: Math.random(), type: value }]);
      setVariants([
        ...variants,
        { id: Math.random(), type: value, values: [] },
      ]);
    }
    // console.log(variants);
    setValue("");
    setAddvariant(false);
  };

  // useEffect(() => {}, [variants]);

  return (
    <Container className="variants">
      <div className="variants-top">
        <h2>Variants</h2>
        <p>You can add only upto 2 groupings</p>
        <button onClick={addVariant}>
          <i class="fa-regular fa-plus"></i>
          Add variants
        </button>
        <div
          className="variants-overlay"
          style={{ display: addvariant ? "flex" : "none" }}
        >
          <div className="variants-overlay-content">
            <div className="title">
              <h3>Add variant</h3>
              <i class="fa-solid fa-xmark" onClick={closeAddVariant}></i>
            </div>
            <h2>Enter variants name</h2>
            <input
              type="text"
              placeholder="Variants"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              onClick={() => addHandler(value)}
              disabled={variants.length >= 2}
            >
              Add Variant
            </button>
          </div>
        </div>
      </div>
      <div className="variants-grid">
        {variants.map((variant) => {
          return (
            <Variant
              name={variant.type}
              id={variant.id}
              variants={variants}
              variantValue={variant}
              setVariants={setVariants}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Variants;
