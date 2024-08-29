import { useRef } from "react";
import "./TableHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import { useTable, useTableDispatch } from "../context/TableContext";
import { TableHeaderProps } from "../types/tableTypes";

/**
 * Table Header component.
 *
 * @component
 * @param props - The props of the component.
 * @param {any} props.data - The data to be passed to the table header.
 * @param {(items: any) => void} props.onDownload - The download button event handler.
 * @returns The rendered Table Header component.
 */

const TableHeader: React.FC<TableHeaderProps> = ({ data, onDownload }) => {
  const { selectedItems } = useTable();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTableDispatch();
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "selectAll", payload: { isAllSelected: ev.target.checked, selectedItems: [...data] } });
  }

  if (inputRef?.current) {
    inputRef.current.indeterminate = selectedItems.size > 0 && selectedItems.size < data.length;
  }

  return (
    <div className="table-header">
      <div>
        <input ref={inputRef} type="checkbox" onChange={onChange} checked={selectedItems.size === data.length} />
        <label className="selected-count">{selectedItems?.size > 0 ? `Selected ${selectedItems?.size}` : "None Selected"}</label>
      </div>
      <Button buttonType="clear" onClick={() => onDownload(selectedItems)} disabled={selectedItems?.size === 0}>
        <FontAwesomeIcon icon={faDownload} />
        <span>Download Selected</span>
      </Button>
    </div>
  )
}

export default TableHeader;