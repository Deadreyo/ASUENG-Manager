const iconStyle: React.CSSProperties = {
  // color: "wheat"
  float: 'right',
  fontStyle: 'normal',
  padding: '1px',
};

export default function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <span style={iconStyle} className="">
      <a href="#" onClick={onClick}>
        <i className="fas fa-trash-alt text-danger" style={iconStyle}></i>
      </a>
    </span>
  );
}
