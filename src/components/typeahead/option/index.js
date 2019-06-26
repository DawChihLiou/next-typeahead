import MenuItem from '@material-ui/core/MenuItem';

export default function Option({
  isFocused,
  isSelected,
  innerProps,
  innerRef,
  children,
}) {
  return (
    <MenuItem
      ref={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
}
