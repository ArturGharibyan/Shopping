
interface ImageProps {
    image: any
    dimensius:any
}

const Dimensius = ({ image,dimensius }: ImageProps) => {

    return (
               image.map((image:any,i:any)=>(<div key={i}>{dimensius}<img src={image} /></div>)) 
    
    );
};

export default Dimensius;