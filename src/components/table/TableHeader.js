import React, { useState, useEffect } from "react";
import SupplementService from "../../api/SupplementService";
import EditSupplement from "../EditSupplement";
import TableRows from "./TableRows";
import lodash from "lodash";
import Cart from "../Cart";

const TailwindTable = () => {
  const [supplements, setSupplements] = useState([]); // list of supp
  const [loading, setLoading] = useState(false);
  const [editState, setEditState] = useState(-1); //set edit sate of item by id
  const [editingSupp, setEditingSupp] = useState({}); // single supp to be edited
  const [checkedItem, setCheckedItem] = useState([]); // list of checked supp

  const handleOnCheck = (e, temp) => {
    setLoading(true);
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItem([...checkedItem, temp]);
    } else {
      setCheckedItem(checkedItem.filter((i) => i !== value));
    }
    setLoading(false);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await SupplementService.fetchAll();
      setSupplements(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(checkedItem);
  }, [checkedItem]);

  const deleteSupplement = (e, productId) => {
    e.preventDefault();
    SupplementService.deleteSupplement(productId).then((res) => {
      setSupplements((prevElement) => {
        return prevElement.filter(
          (supplement) => supplement.productId !== productId
        );
      });
    });
  };

  const triggerEditSupplement = (e, id, v) => {
    console.log(id);
    setEditState(id);
    setEditingSupp(supplements[v]);
  };

  const cancelEdit = () => {
    console.log("cancel editingSupp for suppl: " + editingSupp.productName);
    setEditState(-1);
    setEditingSupp({});
  };

  const saveEditSupp = (editingSupp, index) => {
    if (JSON.stringify(supplements[index]) === JSON.stringify(editingSupp)) {
      console.log("please change something!");
    } else if (editingSupp.productName.length < 3) {
      console.log("name must more than 3 char!");
    } else {
      const temp = lodash.cloneDeep(supplements);
      temp[index] = editingSupp;
      SupplementService.updateSupplement(editingSupp)
        .then((res) => {
          if (res.data.data) {
            console.log(
              "update succeses for item " + res.data.data.productName
            );
            setSupplements(temp);
          } else console.log(res.data.errorMessage);
          console.log("supplement changed: ", supplements[index]);
        })
        .catch((e) => { });

      setEditState(-1);
    }
  };

  return (
    <div class="flex justify-center ">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div class="py-10 inline-block sm:px-6 lg:px-10">
          <div class="overflow-hidden">
            <table class="w-min">
              <thead class="border-b uppercase">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    productName
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    brand
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    type
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    alias
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    price
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    dosage
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    quantity
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    packaging
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    available
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-left font-mono"
                  >
                    remarks
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold bg-slate-50 text-gray-900 px-2 py-2 text-center font-mono"
                  >
                    action
                  </th>
                </tr>
              </thead>

              {!loading && (
                <tbody className="bg-white">

                  {checkedItem.length > 0 ? (checkedItem.map(i => {
                    <Cart supplement={i} />
                  })) : null}

                  {supplements.map((supplement, v) =>
                    editState === supplement.productId ? (
                      <EditSupplement
                        key={v}
                        index={v}
                        cancelEdit={cancelEdit}
                        supplement={supplements[v]}
                        saveEditSupp={saveEditSupp}
                        editingSupp={editingSupp}
                        setEditingSupp={setEditingSupp}
                      />
                    ) : (
                      <TableRows
                        supplement={supplement}
                        key={v}
                        index={v}
                        deleteSupplement={deleteSupplement}
                        triggerEditSupplement={triggerEditSupplement}
                        handleOnCheck={handleOnCheck}
                      ></TableRows>
                    )
                  )}


                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindTable;
