export const advisorColumns = [
    //{ field: "id", headerName: "ID", width: 70 },
    {
      field: "advisor", // field for product avatar (in db) //field ikut semester
      headerName: "Name", //column name (in page)
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="pdf" />
            {params.row.name} {/* Product Title */}
          </div>
        );
      },
    },
    {
        field: "room",
        headerName: "Room",
        width: 130,
      },
      {
          field: "email",
          headerName: "Email",
          width: 130,
        },
    {
      field: "stud1", 
      headerName: "Student Name 1",
      width: 200,
    },

    {
        field: "stud2",
        headerName: "Student Name 1",
        width: 200,
    },
  ];