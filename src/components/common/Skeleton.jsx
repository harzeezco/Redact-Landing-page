function Skeleton({ classes = "title width-100" }) {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames} />;
}
export default Skeleton;
