export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product", // field for product avatar (in db)
      headerName: "Product", //column name (in page)
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.title} {/* Product Title */}
          </div>
        );
      },
    },
    {
      field: "desc", //description column
      headerName: "Description",
      width: 230,
    },

    {
        field: "category",
        headerName: "Category",
        width: 100,
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 80,
    },

    {
        field: "stock",
        headerName: "Stock",
        width: 80,
    },

    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];