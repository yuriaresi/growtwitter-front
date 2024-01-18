

interface IconsProps {
  icon: string;
}


export function Icons(props: IconsProps) {
  return (
    <div>
      <img src={props.icon} alt="icone-growtwitter" />
    </div>
  );
}
