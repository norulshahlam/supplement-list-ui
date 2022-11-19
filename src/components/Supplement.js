import React from "react";

const Supplement = ({ supplement, deleteSupplement }) => {
  return (
    <tr key={supplement.id} className="hover:bg-slate-100">
      <td className="text-left whitespace-nowrap">
        <label class="form-control">
          <input type="checkbox" name="checkbox" />
        </label>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.productName}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.alias}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.type}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.brand}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.price}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.dosage}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.quantity}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.packaging}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.available}</div>
      </td>
      <td className="text-left px-6 py-1 whitespace-nowrap">
        <div className="text-sm text-black-500">{supplement.remarks}</div>
      </td>
      <td className="text-right px-6 py-1 whitespace-nowrap font-normal text-sm flex justify-center items-center">
        <a className="text-white hover:text-indigo-800 px-2 mx-2 hover:cursor-pointer bg-black rounded-md">
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

export default Supplement;
