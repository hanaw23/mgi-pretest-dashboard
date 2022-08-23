export default function BoxIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height} width={props.width} fill={props.fill} className={props.className}>
      <path d="m5 9v10h14.002l-.002-10zm11 4h-8v-2h8zm4.002-6-.002-2h-16v2h16z" fill="none" />
      <path d="m20 3h-16c-1.103 0-2 .897-2 2v2c0 .736.405 1.375 1 1.722v10.278c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-10.278c.595-.347 1-.986 1-1.722v-2c0-1.103-.897-2-2-2zm-16 2h16l.002 2h-.002-16zm1 14v-10h14l.002 10z" />
      <path d="m8 11h8v2h-8z" />
    </svg>
  );
}
