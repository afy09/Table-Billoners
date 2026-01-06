import React, { useMemo, useState, useEffect } from "react";
import { famousPeople } from "../../data/famousPeople";
import TableFilters from "./tablefilter";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 10;

const FamousTable: React.FC = () => {
  const [search, setSearch] = useState("");
  const [negara, setNegara] = useState("");
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);

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

  // reset ke page 1 kalau filter berubah
  useEffect(() => {
    setPage(1);
  }, [search, negara, sort]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, page]);

  return (
    <section className="max-w-6xl mx-auto px-4 pb-5">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🌍 80 Orang Terkaya Di Dunia</h2>

      <TableFilters search={search} setSearch={setSearch} negara={negara} setNegara={setNegara} sort={sort} setSort={setSort} negaraList={negaraList} />

      {/* TABLE DESKTOP */}
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
            {paginatedData.map((p) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-semibold">{p.rank}</td>
                <td className="p-4">{p.nama}</td>
                <td className="p-4">{p.kekayaan} M $</td>
                <td className="p-4">{p.usia}</td>
                <td className="p-4">{p.negara}</td>
                <td className="p-4">{p.agama}</td>
                <td className="p-4">{p.terkenalKarena}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD */}
      <div className="md:hidden grid gap-4">
        {paginatedData.map((p) => (
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

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-2 rounded-lg border transition
                ${page === num ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-100"}`}>
              {num}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6">Link Referensi :</div>
      <Link className="text-blue-600 break-all mb-8" to="https://www.bloomberg.com/billionaires/">
        https://www.bloomberg.com/billionaires/
      </Link>
    </section>
  );
};

export default FamousTable;
