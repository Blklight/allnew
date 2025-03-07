export default function Wireframe() {
  return (
    <div className="w-[400px] h-[600px] border-2 border-gray-400 rounded-lg overflow-auto p-4 bg-white shadow-lg">
      <div className="space-y-4">
        <div className="w-full h-24 bg-gray-300 rounded" />
        <div className="w-full h-16 bg-gray-300 rounded" />
        <div className="w-full h-48 bg-gray-300 rounded" />
        <div className="w-full h-32 bg-gray-300 rounded" />
        <div className="w-full h-40 bg-gray-300 rounded" />
      </div>
    </div>
  );
}
