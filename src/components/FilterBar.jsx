function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Tất cả
      </button>

      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Đang làm
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Đã hoàn thành
      </button>
    </div>
  );
}

export default FilterBar;