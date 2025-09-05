import Image from "next/image";
import React from "react";

interface ListItemProps {
  src: string;
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ src, name }) => {
  return (
    <div>
      <Image src={src} alt={name} width={100} height={100} />
      <span>{name}</span>
    </div>
  );
};

export default ListItem;
