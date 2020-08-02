import React from "react";

function FormField({ label, name, type, value, onChange }) {
  return (
    <div>
        <label>
            {label}
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
        </label>
    </div>

<div>
<label>
  Descrição:
  <textarea
    type="text"
    value={values.descricao}
    name="descricao"
    onChange={handleChange}
  />
</label>
</div>
  )
}

export default FormField;