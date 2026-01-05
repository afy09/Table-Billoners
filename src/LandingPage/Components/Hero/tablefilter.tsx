interface Props {
  search: string;
  setSearch: (v: string) => void;
  negara: string;
  setNegara: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  negaraList: string[];
}

const TableFilters: React.FC<Props> = ({ search, setSearch, negara, setNegara, sort, setSort, negaraList }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <input type="text" placeholder="Search nama..." value={search} onChange={(e) => setSearch(e.target.value)} className="px-4 py-2 rounded-lg border focus:ring focus:ring-primary" />

      <select value={negara} onChange={(e) => setNegara(e.target.value)} className="px-4 py-2 rounded-lg border focus:ring focus:ring-primary">
        <option value="">All Countries</option>
        {negaraList.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-4 py-2 rounded-lg border focus:ring focus:ring-primary">
        <option value="desc">Up → Down</option>
        <option value="asc">Down → Up</option>
      </select>
    </div>
  );
};

export default TableFilters;
