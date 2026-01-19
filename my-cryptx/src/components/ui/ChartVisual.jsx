import { btcChartData } from "../../data/chartStaticData";

export default function ChartVisual() {
  // Extract min/max for scaling
  const prices = btcChartData.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Dimensions
  const width = 400;
  const height = 200;

  // Scale function
  const scaleY = (price) =>
    height - ((price - minPrice) / (maxPrice - minPrice)) * height;

  // Build path string
  const pathData = btcChartData
    .map((point, i) => {
      const x = (i / (btcChartData.length - 1)) * width;
      const y = scaleY(point.price);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">BTC Price (Static)</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
        <path d={pathData} fill="none" stroke="#1E40AF" strokeWidth="2" />
      </svg>
    </div>
  );
}