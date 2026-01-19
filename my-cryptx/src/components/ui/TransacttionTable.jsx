import { transactions } from "../../data/transactionData";

export default function TransactionTable() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Coin</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Price</th>
            <th className="p-2">Total</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-t">
              <td className="p-2">{tx.date}</td>
              <td
                className={`p-2 font-medium ${
                  tx.type === "buy" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.type.toUpperCase()}
              </td>
              <td className="p-2">{tx.coin} ({tx.symbol})</td>
              <td className="p-2">{tx.amount}</td>
              <td className="p-2">${tx.price.toLocaleString()}</td>
              <td className="p-2">${tx.total.toLocaleString()}</td>
              <td
                className={`p-2 ${
                  tx.status === "completed"
                    ? "text-green-600"
                    : tx.status === "pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {tx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}