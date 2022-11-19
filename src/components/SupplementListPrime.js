import React, { useState, useEffect, useRef } from "react";
import SupplementService from "../api/SupplementService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toolbar } from "primereact/toolbar";

const SupplementListPrime = () => {
  let emptyProduct = {
    productName: "",
    alias: "",
    type: "",
    brand: "",
    price: 0,
    dosage: "",
    quantity: "",
    packaging: "",
    available: "INSTOCK",
    remarks: ""
  };
  const [supplements, setSupplements] = useState([]);
  const [supplement, setSupplement] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [productDialog, setProductDialog] = useState(false);

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

  const onColReorder = () => {
    toast.current.show({
      severity: "success",
      summary: "Column Reordered",
      life: 3000,
    });
  };

  const updateData = async (supplement) => {
    setLoading(true);
    try {
      const response = await SupplementService.updateSupplement(supplement);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteData = async (id) => {
    setLoading(true);
    try {
      const response = await SupplementService.deleteSupplement(id);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onRowEditComplete = (e) => {
    let _supplements = [...supplements];
    let { newData, index } = e;
    _supplements[index] = newData;

    // Only Update if there is changes
    if (JSON.stringify(supplements[index]) !== JSON.stringify(newData)) {
      console.log("value changed!");
      updateData(newData);

      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Product " + newData.productName + " updated",
        life: 3000,
      });
      setSupplements(_supplements);
    }
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  // select / delete single
  const hideDeleteProductDialog = () => {
    console.log("delete cancelled");
    setDeleteProductDialog(false);
  };

  const actionBodyTemplate = (supplement) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash 8rem"
          className="p-button-rounded p-button-warning "
          onClick={() => confirmDeleteProduct(supplement)}
        />
      </React.Fragment>
    );
  };

  const confirmDeleteProduct = (supplement) => {
    console.log("confirm to delete supplement?");
    setSupplement(supplement); // pass supplement as state for deletion
    setDeleteProductDialog(true); // activate dialog box for confirmation
  };

  const deleteProduct = () => {
    let _supplements = supplements.filter(
      (val) => val.productId !== supplement.productId
    );
    console.log("deleting supplement id: " + supplement.productId);
    console.log("supplement left: " + _supplements.length);
    setSupplements(_supplements);
    setDeleteProductDialog(false); // close dialog box after confirmation
    deleteData(supplement.productId);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product " + supplement.productName + " deleted",
      life: 3000,
    });
    setSupplement(null);
  };

  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );

  const confirmDeleteSelected = () => {
    console.log("in confirmDeleteSelected");
    console.log(selectedProducts.map((v) => v.productName));
    setDeleteProductsDialog(true);
  };

  // delete / new button
  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success mr-2"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </React.Fragment>
    );
  };

  // select / delete multiple
  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const deleteSelectedProducts = () => {
    let _products = supplements.filter(
      (val) => !selectedProducts.includes(val)
    );
    console.log("in deleteSelectedProducts");
    setSupplements(_products); // new list after deletion
    setDeleteProductsDialog(false); // close dialog after confirmation
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail:
        "Products Deleted: \n" +
        selectedProducts.map((v) => "\n" + v.productName + "\n"),
      life: 9000,
    });
    setSelectedProducts(null); // reset selected supplements
  };

  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  // create new
  const openNew = () => {
    console.log("new items");
    setSupplement(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Toast ref={toast} />
      <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
      {!loading ? (
        <div className="content-section implementation card p-fluid">
          <div className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
            <DataTable
              editMode="row"
              dataKey="productId"
              onRowEditComplete={onRowEditComplete}
              value={supplements}
              header="List of supplements {{+f+}}"
              footer="End of list"
              reorderableColumns
              onColReorder={onColReorder}
              size="small"
              resizableColumns
              columnResizeMode="fit"
              responsiveLayout="scroll"
              className="datatable-responsive py-3 px-6"
              selection={selectedProducts}
              selectionMode="checkbox"
              onSelectionChange={(e) => setSelectedProducts(e.value)}
            >
              <Column selectionMode="multiple" style={{ width: "1%" }}></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="productName"
                style={{ width: "2%" }}
                header="productName"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="alias"
                style={{ width: "4%" }}
                header="alias"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="type"
                style={{ width: "10%" }}
                header="type"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="brand"
                style={{ width: "10%" }}
                header="brand"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="price"
                style={{ width: "5%" }}
                header="price"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="dosage"
                style={{ width: "5%" }}
                header="dosage"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="quantity"
                style={{ width: "5%" }}
                header="quantity"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="packaging"
                style={{ width: "5%" }}
                header="packaging"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                field="available"
                style={{ width: "5%" }}
                header="available"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                header="remarks"
                field="remarks"
                style={{ width: "5%" }}
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                sortable
                editor={(options) => textEditor(options)}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                rowEditor
                style={{ width: "2%" }}
                bodyStyle={{ textAlign: "center" }}
              ></Column>
              <Column
                className="text-left px-6 py-1 whitespace-nowrap text-sm text-black-500"
                body={actionBodyTemplate}
                exportable={false}
                bodyStyle={{ textAlign: "center" }}
                style={{ width: "2%" }}
              ></Column>
            </DataTable>
            <Dialog
              visible={deleteProductDialog}
              style={{ width: "450px" }}
              header="Confirm"
              modal
              footer={deleteProductDialogFooter}
              onHide={hideDeleteProductDialog}
            >
              <div className="confirmation-content">
                <i
                  className="pi pi-exclamation-triangle mr-3"
                  style={{ fontSize: "2rem" }}
                />
                {supplement && (
                  <span>
                    Are you sure you want to delete
                    <b> {supplement.productName}</b>?
                  </span>
                )}
              </div>
            </Dialog>
            <Dialog
              visible={deleteProductsDialog}
              style={{ width: "450px" }}
              header="Confirm"
              modal
              footer={deleteProductsDialogFooter}
              onHide={hideDeleteProductsDialog}
            >
              <div className="confirmation-content">
                <i
                  className="pi pi-exclamation-triangle mr-3"
                  style={{ fontSize: "2rem" }}
                />
                {selectedProducts && (
                  <span>
                    Are you sure you want to delete the selected supplements:
                    <b>
                      {selectedProducts.map((v, i) => (
                        <p key={i}>{i+1}. {v.productName} </p>
                      ))}
                    </b>
                  </span>
                )}
              </div>
            </Dialog>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SupplementListPrime;
