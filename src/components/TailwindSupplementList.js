import React, { useState, useEffect } from "react";
import SupplementService from "../api/SupplementService";
import EditSupplement from "./EditSupplement";
import TailwindSupplement from "./TailwindSupplement";
import lodash from "lodash";

const TailwindTable = () => {
  const [supplements, setSupplements] = useState([]); // list of supp
  const [loading, setLoading] = useState(false);
  const [editState, setEditState] = useState(-1); //set edit sate of item by id
  const [editingSupp, setEditingSupp] = useState({}); // single supp to be edited
  const [checkbox, setCheckbox] = useState([]);

  const handleOnCheck = (e, temp) => {
    setLoading(true);
    const { value, checked } = e.target;
    if (checked) {
      setCheckbox([...checkbox, temp]);
    } else {
      setCheckbox(checkbox.filter((i) => i !== value));
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
    if (editingSupp.productName.length > 2) {
      const temp = lodash.cloneDeep(supplements);
      temp[index] = editingSupp;
      console.log(temp);
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
        .catch((e) => {});
      setEditState(-1);
    } else {
      console.log("name must more than 3 char!");
    }
  };

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b uppercase">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    productName
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    alias
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    type
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    brand
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    price
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    dosage
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    quantity
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    packaging
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    available
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    remarks
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    action
                  </th>
                </tr>
              </thead>
              {!loading && (
                <tbody className="bg-white">
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
                      <TailwindSupplement
                        supplement={supplement}
                        key={v}
                        index={v}
                        deleteSupplement={deleteSupplement}
                        triggerEditSupplement={triggerEditSupplement}
                        handleOnCheck={handleOnCheck}
                      ></TailwindSupplement>
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
