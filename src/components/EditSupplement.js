import React, { useState } from "react";

const EditSupplement = ({
  cancelEdit,
  saveEditSupp,
  editingSupp,
  supplement,
  setEditingSupp
}) => {

  const {
    productName,
    alias,
    type,
    brand,
    price,
    dosage,
    quantity,
    packaging,
    available,
    remarks,
  } = editingSupp;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingSupp({
      ...supplement,
      [name]: value,
    });
    console.log(name, value, editingSupp);
  };
  return (
    <tr class="bg-gray-300 border-b">
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={productName}
          type="text"
          name="productName"
          placeholder="Enter name"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={alias}
          type="text"
          name="alias"
          placeholder="Enter alias"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={type}
          type="text"
          name="type"
          placeholder="Enter type"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={brand}
          type="text"
          name="brand"
          placeholder="Enter brand"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={price}
          type="number"
          name="price"
          placeholder="Enter price"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={dosage}
          type="text"
          name="dosage"
          placeholder="Enter dosage"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={quantity}
          type="text"
          name="quantity"
          placeholder="Enter quantity"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={packaging}
          type="text"
          name="packaging"
          placeholder="Enter packaging"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={available}
          type="text"
          name="available"
          placeholder="Enter available"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          value={remarks}
          type="text"
          name="remarks"
          placeholder="Enter remarks"
          className="rounded-md px-1"
          onChange={handleChange}
        ></input>
      </td>
      <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <a
          onClick={cancelEdit}
          className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md"
        >
          Cancel
        </a>
        <a
          onClick={() => saveEditSupp(editingSupp)}
          className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md"
        >
          Save
        </a>
      </td>
    </tr>
  );
};

export default EditSupplement;
