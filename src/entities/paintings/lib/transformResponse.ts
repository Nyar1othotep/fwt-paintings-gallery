export const transformResponse = (data: any) =>
  data.paintings.map((painting: any) => ({
    ...painting,
    authorId: { ...data.authors }[painting.authorId].name,
    locationId: { ...data.locations }[painting.locationId].name,
  }));
