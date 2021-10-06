import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NavSelector() {
  const handleChanger = (e) => {
    console.log(e);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 200, border: 0 }}
        className="formControl"
      >
        <NativeSelect onChange={(e) => handleChanger(e.target.value)}>
          <option> Global </option>
          <option> new </option>
          <option> qordl </option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
