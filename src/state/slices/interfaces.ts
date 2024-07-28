import { IResult } from "@components/DetailedCard/interfaces";

export interface ItemState {
  items: IResult[];
  selectedItems: IResult[];
  loading: boolean;
}
export interface SelectedItemState {
  selectedItem: boolean | null;
}
