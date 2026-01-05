import React, { useMemo, useState } from "react";
import { famousPeople } from "../../data/famousPeople";
import TableFilters from "./tablefilter";
import { Link } from "react-router-dom";

const FamousTable: React.FC = () => {
  const [search, setSearch] = useState("");
  const [negara, setNegara] = useState("");
  const [sort, setSort] = useState("desc");

  const negaraList = [...new Set(famousPeople.map((p) => p.negara))];

  const filteredData = useMemo(() => {
    let data = [...famousPeople];

    if (search) {
      data = data.filter((p) => p.nama.toLowerCase().includes(search.toLowerCase()));
    }

    if (negara) {
      data = data.filter((p) => p.negara === negara);
    }

    data.sort((a, b) => (sort === "desc" ? b.kekayaan - a.kekayaan : a.kekayaan - b.kekayaan));

    return data;
  }, [search, negara, sort]);

  return (
    <section className="max-w-6xl mx-auto px-4 ">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🌍 80 Orang Terkaya Di Dunia</h2>

      <TableFilters search={search} setSearch={setSearch} negara={negara} setNegara={setNegara} sort={sort} setSort={setSort} negaraList={negaraList} />

      {/* Table Desktop */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Nama</th>
              <th className="p-4">Kekayaan</th>
              <th className="p-4">Usia</th>
              <th className="p-4">Negara</th>
              <th className="p-4">Agama</th>
              <th className="p-4">Terkenal Karena</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((p) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-semibold">{p.rank}</td>
                <td className="p-4">{p.nama}</td>
                <td className="p-4">{p.kekayaan} $</td>
                <td className="p-4">{p.usia}</td>
                <td className="p-4">{p.negara}</td>
                <td className="p-4">{p.agama}</td>
                <td className="p-4">{p.terkenalKarena}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden grid gap-4">
        {filteredData.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4 space-y-1">
            <div className="flex justify-between font-semibold">
              <span>#{p.rank}</span>
              <span>{p.negara}</span>
            </div>
            <h3 className="text-lg font-bold">{p.nama}</h3>
            <p className="text-sm text-gray-600">Usia: {p.usia}</p>
            <p className="text-sm text-gray-600">Agama: {p.agama}</p>
            <p className="text-sm">{p.terkenalKarena}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">Link Referensi :</div>
      <Link className="text-blue-600" to={"https://www.bloomberg.com/billionaires/"}>
        https://www.bloomberg.com/billionaires/
      </Link>
    </section>
  );
};

export default FamousTable;
