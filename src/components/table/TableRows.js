import React from "react";
import lodash from "lodash";

const TableRows = ({
  supplement,
  deleteSupplement,
  triggerEditSupplement,
  index,
  handleOnCheck,
}) => {
  const temp = lodash.cloneDeep(supplement);

  return (
    <tr
    class="bg-white border-b hover:bg-slate-100"
      value={supplement}
    >
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        <input
          type="checkbox"
          value={supplement}
          onClick={(e) => handleOnCheck(e, temp)}
        />
      </td>

      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.productName}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.brand}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.type}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.alias}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.price}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.dosage}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.quantity}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.packaging}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.available}
      </td>
      <td class="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        {supplement.remarks}
      </td>
      <td class=" text-center text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap font-mono">
        <button
          onClick={(e) => triggerEditSupplement(e, supplement.productId, index)}
          className="text-white bg-black hover:text-black hover:bg-white px-2 mx-2 hover:cursor-pointer rounded-md hover:border-black"
        >
          Edit
        </button>
        <button
          onClick={(e, id) => deleteSupplement(e, supplement.productId)}
          className="text-white bg-black hover:text-black hover:bg-white px-2 mx-2 hover:cursor-pointer rounded-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRows;
