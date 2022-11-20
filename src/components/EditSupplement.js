import React from "react";

const EditSupplement = ({ cancelEdit, editSupplement, editSupp }) => {

  console.log(editSupp)
  return (
    <tr class="bg-white border-b">
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input  type="text" name="productName" placeholder="Enter name"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" name="alias" placeholder="Enter alias"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" name="type" placeholder="Enter type"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" name="brand" placeholder="Enter brand"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="number" name="price" placeholder="Enter price"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" name="dosage" placeholder="Enter dosage"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" name="quantity" placeholder="Enter quantity"></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          type="text"
          name="packaging"
          placeholder="Enter packaging"
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          type="text"
          name="available"
          placeholder="Enter available"
        ></input>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" name="remarks" placeholder="Enter remarks"></input>
      </td>
      <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <a
          onClick={cancelEdit}
          className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md"
        >
          Cancel
        </a>
        <a
          onClick={() => editSupplement(editSupp)}
          className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md"
        >
          Save
        </a>
      </td>
    </tr>
  );
};

export default EditSupplement;
