import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NavSelector({ data, handleChanger }) {
  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 200, border: 0 }}
        className="formControl"
      >
        <NativeSelect onChange={(e) => handleChanger(e.target.value)}>
          <option> Global </option>
          {data.map((country) => (
            <option> {country.country} </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
