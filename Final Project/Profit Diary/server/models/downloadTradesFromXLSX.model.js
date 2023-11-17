const XLSX = require("xlsx");

const readExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const insertDataFromExcel = async (filePath) => {
  const data = readExcelFile(filePath);

  const formattedData = data.map((row) => ({
    DateTrades: row["Date Trades"], // Adjust the key to match your database column name
    Currency: row["Currency"],
    Type: parseInt(row["Type"], 10), // Assuming Type is an integer
    Side: row["Side"],
    Symbol: row["Symbol"],
    Qty: parseInt(row["Qty"], 10), // Assuming Qty is an integer
    Price: parseFloat(row["Price"]), // Assuming Price is a numeric
    ExecTime: row["Exec Time"], // Make sure the format matches your database
    Comm: parseFloat(row["Comm"]), // Assuming Comm is a numeric
    GrossProceeds: parseFloat(row["Gross Proceeds"]), // Assuming GrossProceeds is a numeric
    NetProceeds: parseFloat(row["Net Proceeds"]), // Assuming NetProceeds is a numeric
  }));

  try {
    const insertedRows = await db("trades")
      .insert(formattedData)
      .returning("*"); // Returning all columns
    return insertedRows;
  } catch (error) {
    console.error("Error inserting data into database:", error);
    throw error;
  }
};
