import LineDance from "./LineDance";

export default function Collection({ title, data }) {
  return (
    <section className="border-4 border-solid rounded p-8 relative">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>
        {data.map((d, i) => (
          <LineDance key={i} data={d} />
        ))}
      </div>
    </section>
  );
}
