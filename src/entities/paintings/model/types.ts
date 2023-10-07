export type TDto = {
  authorId: number | string;
  created: string;
  id?: number;
  imageUrl: string;
  locationId: number | string;
  name: string;
};

export type TOtherDto = {
  id: number;
  name: string;
};

export type TData = {
  paintings: TDto[];
  authors: TOtherDto[];
  locations: TOtherDto[];
};
