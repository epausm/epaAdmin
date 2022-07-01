export const infoColumns = [
    //{ field: "id", headerName: "ID", width: 70 },
    {
      field: "info", // field for product avatar (in db) //field ikut semester
      headerName: "Information", //column name (in page)
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="pdf" />
            {params.row.coursecode} {/* Product Title */}
          </div>
        );
      },
    },
    {
      field: "coursename", 
      headerName: "Course Name",
      width: 230,
    },

    {
        field: "coursetype",
        headerName: "Type",
        width: 100,
    },
  
    {
      field: "unit",
      headerName: "Unit",
      width: 80,
    },
  ];