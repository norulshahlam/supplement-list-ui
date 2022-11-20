import React, { useState, useEffect } from "react";
import EditSupplement from "./EditSupplement";

const TailwindSupplement = ({
  supplement,
  deleteSupplement,
  editSupplement,
  index
}) => {
  const [checkbox, setCheckbox] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnCheck = (e) => {
    setLoading(true);
    const { value, checked } = e.target;
    console.log(value, checked);
    if (checked) {
      setCheckbox([...checkbox, value]);
    } else {
      setCheckbox(checkbox.filter((i) => i !== value));
    }
    setLoading(false);
    testing();
  };

  const testing = () => {
    if (!loading) {
      console.log(checkbox);
    }
  };

  return (
    <tr class="bg-white border-b hover:bg-slate-100">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <input
          type="checkbox"
          value={supplement.productId}
          onClick={(e) => handleOnCheck(e)}
          checked={supplement.checkbox}
        />
      </td>

      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.productName}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.alias}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.type}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.brand}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.price}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.dosage}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.quantity}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.packaging}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.available}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {supplement.remarks}
      </td>
      <td class=" text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e) => editSupplement(e, supplement.productId, index)}
          className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteSupplement(e, supplement.productId)}
          className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default TailwindSupplement;
