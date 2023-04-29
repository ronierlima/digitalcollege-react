function Table({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Usuário</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {data.map(pessoa => <tr>{pessoa.id}</tr>)}
      </tbody>
    </table>
  );
}

export default Table;
