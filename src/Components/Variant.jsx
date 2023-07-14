import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import VariantBox from "./VariantBox";
import "../../src/Variant.css";

const Variant = ({ name, id, variants, setVariants, variantValue }) => {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState([]);
  const [input, setInput] = useState("");
  const [editvalue, setEditvalue] = useState("");
  const [showedit, setShowedit] = useState(false);
  const [editId, setEditId] = useState(0);
  const [deltext, setDelText] = useState("");
  const [selectedVarient, setSelectedVarient] = useState("");

  const addHandler = (input) => {
    // setVariant([...variant, { id: Math.random(), value: input }]);

    let index = variants.findIndex((e) => e.type === selectedVarient);

    variants[index].values.push({ id: Math.random(), value: input });

    setInput("");
    setShow(false);
  };

  // const addHandler = (input, id) => {
  //   const found = variants.filter((v) => v.id === id);
  //   console.log("found", found);

  //   setInput("");
  //   setShow(false);
  // };

  console.log("variants new", variants);
  console.log(variantValue);

  const addType = () => {
    setShow(true);
  };
  const closeOverlay = () => {
    setShow(false);
  };

  const editType = (id) => {
    setShowedit(true);
    const edit = variants.find((i) => i.id === id);
    setEditvalue(edit.type);
    setEditId(edit.id);
  };

  const closeEditOverlay = () => {
    setShowedit(false);
  };

  const updateHandler = () => {
    if (editId) {
      const editVar = variants.find((i) => i.id === editId);
      const updatedVar = variants.map((vari) =>
        vari.id === editVar.id
          ? (vari = { id: vari.id, type: editvalue })
          : { id: vari.id, type: vari.type }
      );
      setVariants(updatedVar);
      setShowedit(false);
    }
  };

  const deleteVariant = (id) => {
    if (deltext === editvalue) {
      console.log("values matched");
      const deleteVari = variants.filter((vari) => vari.id !== id);
      setVariants(deleteVari);
    }
  };

  // const combined = variants.map((v) => ({
  //   id: Math.random(),
  //   type: v.type,
  //   values: variant.map((item) => ({
  //     id: Math.random(),
  //     value: item.value,
  //   })),
  // }));

  const combined = variants.map((v) => ({
    id: Math.random(),
    type: v.type,
    values: variant.map((item) => ({
      id: Math.random(),
      value: item.value,
    })),
    // values: variant
    //   .filter((va) => va.type === v.type)
    //   .map((item) => ({
    //     value: item.value,
    //   })),
  }));

  const varieties = combined.map((c) => ({
    type: c.type,
    value: c.values.map((value) => value.value),
  }));

  return (
    <Container className="variant" key={id}>
      <div className="variant-header">
        <h3>{name}</h3>
        <button
          className="add-btn"
          onClick={() => {
            setSelectedVarient(name);
            addType();
          }}
        >
          Add +
        </button>
        <button className="edit-btn" onClick={() => editType(id)}>
          Edit
        </button>
      </div>
      <div
        className="variant-overlay"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="variant-overlay-content">
          <div className="title">
            <h3>Add variant</h3>
            <i class="fa-solid fa-xmark" onClick={closeOverlay}></i>
          </div>
          <h2>Enter type</h2>
          <input
            type="text"
            placeholder="Variants"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => {
              addHandler(input, id);
            }}
          >
            Add Variant
          </button>
        </div>
      </div>
      <div
        className="variant-editoverlay"
        style={{ display: showedit ? "flex" : "none" }}
      >
        <div className="variant-editoverlay-content">
          <div className="variant-editoverlay-content-title">
            <h2>Edit variant</h2>
            <i class="fa-solid fa-xmark" onClick={closeEditOverlay}></i>
          </div>
          <div className="variant-editoverlay-content-edit">
            <h2>Variants name</h2>
            <input
              type="text"
              placeholder="Color"
              value={editvalue}
              onChange={(e) => setEditvalue(e.target.value)}
            />
            <button onClick={updateHandler}>Update</button>
          </div>
          <div className="variant-editoverlay-content-delete">
            <h2>Delete this variant</h2>
            <p>Enter variants name to confirm delete</p>
            <input
              type="text"
              placeholder="name"
              value={deltext}
              onChange={(e) => setDelText(e.target.value)}
            />
            <button onClick={() => deleteVariant(id)}>Confirm delete</button>
          </div>
        </div>
      </div>
      <div className="variants-list">
        {variantValue.values.map((item) => {
          return (
            <VariantBox
              variantName={item.value}
              variantValue={item}
              variant={variant}
              id={item.id}
              setVariant={setVariant}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Variant;
