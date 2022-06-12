import Product1 from '../images/image-product-1.jpg';
import Product2 from '../images/image-product-2.jpg';
import Product3 from '../images/image-product-3.jpg';
import Product4 from '../images/image-product-4.jpg';

import Product1Thumb from '../images/image-product-1-thumbnail.jpg';
import Product2Thumb from '../images/image-product-2-thumbnail.jpg';
import Product3Thumb from '../images/image-product-3-thumbnail.jpg';
import Product4Thumb from '../images/image-product-4-thumbnail.jpg';

const sneakerImages = [
    { id: 1, src: Product1, alt: 'carousel-1' },
    { id: 2, src: Product2, alt: 'carousel-2' },
    { id: 3, src: Product3, alt: 'carousel-3' },
    { id: 4, src: Product4, alt: 'carousel-4' },
];

const sneakerThumbs = [
    { id: 1, src: Product1Thumb, alt: 'thumb-1' },
    { id: 2, src: Product2Thumb, alt: 'thumb-2' },
    { id: 3, src: Product3Thumb, alt: 'thumb-3' },
    { id: 4, src: Product4Thumb, alt: 'thumb-4' },
];

const webImages = [
    {
        original: Product1,
        thumbnail: Product1Thumb,
    },
    {
        original: Product2,
        thumbnail: Product2Thumb,
    },
    {
        original: Product3,
        thumbnail: Product3Thumb,
    },
    {
        original: Product4,
        thumbnail: Product4Thumb,
    },
];

export { sneakerImages, sneakerThumbs, webImages };
