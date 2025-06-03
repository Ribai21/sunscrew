
import img1 from '../../assets/screw1.jpg'
import img2 from '../../assets/screw2.jpg'
import img3 from '../../assets/screw3.jpg'
import img4 from '../../assets/screw4.jpg'
import img5 from '../../assets/screw5.jpg'
import d1 from '../../assets/Dryscrew/d1.jpg'
import d2 from '../../assets/Dryscrew/d2.jpg'
import d3 from '../../assets/Dryscrew/d3.jpg'
import d4 from '../../assets/Dryscrew/d4.jpg'

 const products = [
        {
            id: 1,
            image:img1,
            name: 'DryWall Screw 1',
            subImages: [d1, d2, d3, d4],
            description: 'Fine threads for easy securing of drywall panels. Bugle-shaped heads ensure a smooth finish, reducing damage risk.',
            price: '$10',
            type:'Philips Head Screw',
            material:'Stainless steel',
            size:'1 inch',
            weight:'0.5 oz',
            usage: 'Ideal for securing drywall panels to wooden or metal studs, providing a strong and reliable hold in construction and renovation projects.'
        },
        {
            id: 2,
            image:img2,
            name: 'DryWall Screw 2',
            description: 'Coated for  resistance, durable, and easy to use.Eliminates the need for pre-drilling holes, streamlining installation.',
            price: '$20',
            type:'Pan Head Screw',
            material:'Stainless steel',
            size:'1 inch',
            weight:'0.5 oz',
            usage: 'Ideal for securing drywall panels to wooden or metal studs, providing a strong and reliable hold in construction and renovation projects.'
        },
        {
            id: 3,
            image:img3,
            name: 'DryWall Screw 3',
            description: 'Ideal for carpenters and DIY enthusiasts. Quick and hassle-free installations save valuable time.',
            price: '$30',
            type:'Flat Head Screw',
            material:'Stainless steel',
            size:'1 inch',
            weight:'0.5 oz',
            usage: 'Ideal for securing drywall panels to wooden or metal studs, providing a strong and reliable hold in construction and renovation projects.'
        },
        {
            id: 4,
            image:img4,
            name: 'DryWall Screw 4',
            description: 'Suitable for various applications. Contributes to a smoother, more efficient construction experience.',
            price: '$30',
            type:'Philips Head Screw',
            material:'Stainless steel',
            size:'1 inch',
            weight:'0.5 oz',
            usage: 'Ideal for securing drywall panels to wooden or metal studs, providing a strong and reliable hold in construction and renovation projects.'
        },
        {
            id: 5,
            image:img5,
            name: 'DryWall Screw 5',
            description:'Renowned for its durability and resistance to corrosion, ensuring longevity in various environments',
            price: '$30',
            type:'Philips Head Screw',
            material:'Stainless steel',
            size:'1 inch',
            weight:'0.5 oz',
            usage: 'Ideal for securing drywall panels to wooden or metal studs, providing a strong and reliable hold in construction and renovation projects.'
        }
    ];
    export default products;