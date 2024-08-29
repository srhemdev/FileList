/**
 * Table Context and Table Actions Types.
 */
export type TableContextValueProps = {
  selectedItems: Map<string, any>,
  selectAll: boolean
}

export type TableContextActionProps = {
  type: string;
  payload: any;
};