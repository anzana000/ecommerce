import React, { useState } from "react";
import "../../src/VariantBox.css";

const VariantBox = ({ variantName, variant, id, setVariant, variantValue }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [edVal, setEdVal] = useState("");
  const [editId, setEditId] = useState(0);
  const showEd = (id) => {
    setShowEdit(true);
    const editItem = variant.find((e) => e.id === id);
    setEdVal(editItem.value);
    setEditId(editItem.id);
  };

  const closeEd = () => {
    setShowEdit(false);
  };

  console.log(variantName);

  const showDelHandler = () => {
    setShowDel(true);
  };
  const closeDelHandler = () => {
    setShowDel(false);
  };
  // const updateEdits = () => {
  //   if (editId) {
  //     const editVar = variant.find((i) => i.id === editId);
  //     const updatedVari = variant.map((vari) =>
  //       vari.id === editVar.id
  //         ? (vari = { id: vari.id, value: edVal })
  //         : { id: vari.id, value: vari.value }
  //     );
  //     setVariant(updatedVari);
  //     setShowEdit(false);
  //   }
  // };

  const updateEdits = () => {
    if (editId) {
      const editVar = variantValue.find((i) => i.id === editId);
      const updatedVari = variantValue.map((vari) =>
        vari.id === editVar.id
          ? (vari = { id: vari.id, value: edVal })
          : { id: vari.id, value: vari.value }
      );
      setVariant(updatedVari);
      setShowEdit(false);
    }
  };

  const deleteVariant = (id) => {
    const deleteVari = variant.filter((vari) => vari.id !== id);
    setVariant(deleteVari);
  };

  console.log("variant", variant);
  console.log(variantValue);
  return (
    <div className="variantBox">
      <h2 className="variantBox-varname">{variantName}</h2>
      <div className="variantBox-icons">
        <i class="fa-solid fa-pen edit" onClick={() => showEd(id)}></i>
        <i class="fa-solid fa-trash dlt" onClick={showDelHandler}></i>
      </div>
      <div
        className="variantBox-editoverlay"
        style={{ display: showEdit ? "flex" : "none" }}
      >
        <div className="variantBox-editoverlay-content">
          <div className="variantBox-editoverlay-content-title">
            <h2>Edit</h2>
            <i class="fa-solid fa-xmark" onClick={closeEd}></i>
          </div>
          <h2 className="variantBox-editoverlay-content-h2">Type</h2>
          <input
            type="text"
            value={edVal}
            onChange={(e) => setEdVal(e.target.value)}
          />
          <button onClick={updateEdits}>Save</button>
        </div>
      </div>
      <div
        className="variantBox-deleteoverlay"
        style={{ display: showDel ? "flex" : "none" }}
      >
        <div className="variantBox-deleteoverlay-content">
          <i class="fa-solid fa-xmark" onClick={closeDelHandler}></i>
          <h2>Are you sure you want to delete this item?</h2>
          <div className="variantBox-deleteoverlay-content-buttons">
            <button onClick={() => deleteVariant(id)}>Delete Now</button>
            <button onClick={closeDelHandler}>Keep</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantBox;
