import { TableProps } from "../types/tableTypes";
import { useTableDispatch, useTable } from "../context/TableContext";

/**
 * Table Row component.
 *
 * @component
 * @param props - The props of the component.
 * @param {any} props.data - The data to be passed to the table header.
 * @param {TableConfigProps} props.config - The table config.
 * @returns The rendered Table Row component.
 */

const TableRow: React.FC<TableProps> = ({ data, config }) => {
  const { id } = data;
  const dispatch = useTableDispatch();
  const { selectedItems } = useTable();
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ev.target.checked ? "selected" : "deselected", payload: { id, value: data } });
  }
  return (
    <tr key={`row-${id}`} className={selectedItems.has(id) ? "selected" : ""}>
      <td key={`checkbox-${id}`}>
        <input type="checkbox"
          id={id}
          onChange={onChange}
          checked={selectedItems.has(id)}
        />
      </td>
      {
        config.map(cfg => {
          const key = `${cfg.accessor}-${id}`;
          if (cfg?.Component) {
            return <td key={key} width={cfg.width}>{cfg.Component(data)}</td>;
          }
          return <td key={key} width={cfg.width}>{data[cfg.accessor]}</td>;
        })
      }
    </tr>
  );
}

export default TableRow;