import React, { useState, useEffect } from "react";
import SupplementService from "../api/SupplementService";
import EditSupplement from "./EditSupplement";
import TailwindSupplement from "./TailwindSupplement";

const TailwindTable = () => {
  const [supplements, setSupplements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editState, setEditState] = useState(-1);
  const [editSupp, setEditSupp] = useState({});

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

  const deleteSupplement = (e, id) => {
    e.preventDefault();
    SupplementService.deleteSupplement(id).then((res) => {
      if (supplements) {
        setSupplements((prevElement) => {
          return prevElement.filter((supplement) => supplement.id !== id);
        });
      }
    });
  };

  const editSupplement = (e, id) => {
    setEditState(id);
    setEditSupp(supplements[id]);
    console.log(supplements[1]);
  };

  const cancelEdit = (e) => {
    console.log("cancel editSupp");
    setEditState(-1);
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
                  {supplements.map((supplement) =>
                    editState === supplement.productId ? (
                      <EditSupplement
                        cancelEdit={cancelEdit}
                        editSupplement={editSupplement}
                        supplement={editSupp}
                      />
                    ) : (
                      <TailwindSupplement
                        supplement={supplement}
                        key={supplement.productId}
                        deleteSupplement={deleteSupplement}
                        editSupplement={editSupplement}
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
