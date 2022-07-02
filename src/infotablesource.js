export const infoColumns = [
    //{ field: "id", headerName: "ID", width: 70 },
    {
      field: "fileName", // field for product avatar (in db) //field ikut semester
      headerName: "Information", //column name (in page)
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="pdf" />
            {params.row.fileName} {/* Product Title */}
          </div>
        );
      },
    },
    {
      field: "fileType",
        headerName: "Type",
        width: 100,
    },
  ];