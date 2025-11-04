const statsCards = [
  { title: "Total de Clientes", value: 128 },
  { title: "Contratos Ativos", value: 84 },
  { title: "Aguardando Assinatura", value: 5 },
  { title: "Próximos do Vencimento", value: 12 },
];

const recentContracts = [
  {
    id: 1,
    client: "Tech Solutions Ltda",
    title: "Contrato de Manutenção de Software",
    status: "Ativo",
    expiryDate: "31/10/2026",
  },
  {
    id: 2,
    client: "Design Criativo S.A.",
    title: "Acordo de Nível de Serviço (SLA)",
    status: "Aguardando Assinatura",
    expiryDate: "01/12/2025",
  },
  {
    id: 3,
    client: "Mercado Central",
    title: "Contrato de Locação - QG",
    status: "Próximo do Vencimento",
    expiryDate: "20/11/2025",
  },
  {
    id: 4,
    client: "Inova Consultoria",
    title: "Contrato de Consultoria (Projeto Phoenix)",
    status: "Ativo",
    expiryDate: "15/05/2026",
  },
  {
    id: 5,
    client: "Alpha Transportes",
    title: "Acordo de Parceria Logística",
    status: "Expirado",
    expiryDate: "01/10/2025",
  },
];

function HomeScreen() {
  const getStatusClass = (
    status:
      | "Ativo"
      | "Aguardando Assinatura"
      | "Próximo do Vencimento"
      | "Expirado",
  ) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-800";
      case "Aguardando Assinatura":
        return "bg-blue-100 text-blue-800";
      case "Próximo do Vencimento":
        return "bg-amber-100 text-amber-800";
      case "Expirado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard de Contratos</h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card) => (
          <div key={card.title} className=" p-6 rounded-lg shadow-md border">
            <h3 className="text-sm font-medium">{card.title}</h3>
            <p className="mt-2 text-3xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* TABELA */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Contratos Recentes</h2>
        <div className="overflow-x-auto rounded-lg shadow-md border">
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Nome do Cliente
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Título do Contrato
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Data de Vencimento
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {" "}
              {recentContracts.map((contract) => (
                <tr key={contract.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {contract.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {contract.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                        contract.status,
                      )}`}
                    >
                      {contract.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {contract.expiryDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
