import { createContext, useReducer, useContext } from "react";
import { FileProps } from "../../../../features/file-list/types/fileListTypes";
import { TableContextActionProps, TableContextValueProps } from "../types/contextTypes";

// Reducer initial table state
const initialValue = {
  selectedItems: new Map(),
  selectAll: false
}

// Table and Table Dispatch context
const TableContext = createContext(initialValue);
const TableDispatchContext = createContext((props: TableContextActionProps) => { });

// Reusable Table Context hook
export function useTable() {
  return useContext(TableContext);
}

// Reusable Table Dispatch hook
export function useTableDispatch() {
  return useContext(TableDispatchContext);
}

// Table reducer to handle shared table state changes
function tableReducer(values: TableContextValueProps, action: TableContextActionProps) {
  switch (action.type) {
    case "selected": {
      const selectedItems = values.selectedItems;
      selectedItems.set(action.payload.id, action.payload.value);
      return { ...values, selectedItems: selectedItems };
    }
    case "deselected": {
      const selectedItems = values.selectedItems;
      selectedItems.delete(action.payload.id);
      return { ...values, selectedItems: selectedItems };
    }
    case "selectAll": {
      const selectedItems = new Map();
      if (action.payload.isAllSelected) {
        action.payload.selectedItems.forEach((item: FileProps) => {
          selectedItems.set(item.id, item);
        })
      }
      return { ...values, selectedItems, selectAll: action.payload.isAllSelected };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

/**
 * Table Provider which contains the shared Table Context
 * and shared Table Dispatch functions used to share state across
 * the different table sub components.
 */
export function TableProvider({ children }: { children: React.ReactNode }) {
  const [values, dispatch] = useReducer(tableReducer, initialValue);

  return (
    <TableContext.Provider value={values}>
      <TableDispatchContext.Provider value={dispatch}>
        {children}
      </TableDispatchContext.Provider>
    </TableContext.Provider>
  );
}
