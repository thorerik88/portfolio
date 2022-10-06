import Image from "next/image";

const ImageCompPlain = ({...data}) => {

  return ( 
    <div>
      <Image  
        src={data.imageLink}
        height={data.height}
        width={1000}
      />
    </div>
  );
}
 
export default ImageCompPlain;