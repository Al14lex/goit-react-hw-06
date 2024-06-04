import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { setStatusFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
   const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = (e) => {
        const name = e.target.value.trim();
        dispatch(setStatusFilter(name));
    };
  return (
    <div className={css.divSearch}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        id='searchBox'
        onChange={handleFilter}
      />
    </div>
  );
}
