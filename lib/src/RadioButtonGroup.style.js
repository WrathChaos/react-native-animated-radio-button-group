export const _eachContainer = (horizontal) => ({
  marginTop: !horizontal && 8,
  marginLeft: horizontal && 12,
});

export const _container = (horizontal) => ({
  flexDirection: horizontal && "row",
});

export default {};
