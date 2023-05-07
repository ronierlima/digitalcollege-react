function Table({ dados }) {
  
  return (
    <table>

        <thead>
            <tr>
                <th>id</th>
                <th>nome</th>
            </tr>
        </thead>
      <tbody>
        {dados.map((linha) => (
          <tr key={linha.id}>
            <td>{linha.id}</td>
            <td>{linha.nome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
