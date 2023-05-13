import React from "react";

import style from "./style.module.css";

function Table({ dados = [], colunas = [] }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          {colunas.map((coluna) => (
            <th key={coluna.atributo}>{coluna.titulo}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dados.map((record) => (
          <tr key={record.id}>
            {colunas.map((coluna) => (
              <td key={coluna.atributo + record.id}>
                {record[coluna.atributo]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
