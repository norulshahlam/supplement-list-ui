import React, { useState, useEffect } from "react";
import SupplementService from "../api/SupplementService";
import Supplement from "./Supplement";

const SupplementList = () => {
  const [supplements, setSupplements] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="container mx-auto my-4 w-full px-4">
      <div className="flex shadow border-b my-10 justify-center">
        <table >
          <thead className="bg-gray-50">
            <tr>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                productName
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                alias
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                type
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                brand
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                price
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                dosage
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                quantity
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                packaging
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                available
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                remarks
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">


              {supplements.map((supplement) => (
                <Supplement
                  supplement={supplement}
                  key={supplement.productId}
                  deleteSupplement={deleteSupplement}
                ></Supplement>
              ))}


            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default SupplementList;
