export default function HeadersCardProfile(props) {
  return (
    <div>
      <img src={props.img1} alt={props.desc1} className={props.className1} />
      <img src={props.img2} alt={props.desc2} className={props.className2} height={props.height} width={props.width} />
    </div>
  );
}
