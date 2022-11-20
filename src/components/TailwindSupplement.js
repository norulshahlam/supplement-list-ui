import React, { useState,useEffect } from "react";
import lodash from "lodash";

const TailwindSupplement = ({
  supplement,
  deleteSupplement,
  triggerEditSupplement,
  index,
  handleOnCheck
}) => {

  const temp = lodash.cloneDeep(supplement);

  return (
    <tr class="bg-white border-b hover:bg-slate-100">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <input
          type="checkbox"
          value={supplement}
          onChange={(e) => handleOnCheck(e,temp)}
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
          onClick={(e) => triggerEditSupplement(e, supplement.productId, index)}
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
