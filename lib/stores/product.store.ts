import type { ProductModel } from '../models';

const state = {
  products: [
    {
      model: '',
      name: '',
      description: '',
      image: '',
    },
  ],
};

const initStore = () => {
  // Información de prueba.
  const products: ProductModel[] = [
    {
      model: 'producto-1',
      name: 'Producto 1',
      description:
        'Ut voluptate labore sint id esse aliqua. Cupidatat reprehenderit dolor esse voluptate commodo non cillum aliqua labore. Excepteur magna reprehenderit ut eu et do. Enim reprehenderit aliquip reprehenderit culpa adipisicing aliqua et Lorem incididunt. Sunt commodo consectetur proident qui. Magna pariatur ex nostrud commodo quis nisi deserunt reprehenderit Lorem. In occaecat nostrud aute qui laboris elit ut officia reprehenderit quis dolore nulla eiusmod laborum. Eu id dolore incididunt nostrud consequat. Aute ex est est labore elit ullamco tempor esse magna excepteur. Fugiat occaecat velit labore nulla id quis nisi. Cillum incididunt eu anim eu non aliqua dolor sunt anim minim consectetur incididunt. Qui cupidatat dolore ea aute commodo sint dolore eu dolore eiusmod. Incididunt nostrud sit nulla consequat ex eiusmod aliquip. Lorem laborum proident ad adipisicing consequat mollit enim culpa ullamco.',
      image: 'https://via.placeholder.com/200',
    },
    {
      model: 'producto-2',
      name: 'Producto 2',
      description:
        'Ut voluptate labore sint id esse aliqua. Cupidatat reprehenderit dolor esse voluptate commodo non cillum aliqua labore. Excepteur magna reprehenderit ut eu et do. Enim reprehenderit aliquip reprehenderit culpa adipisicing aliqua et Lorem incididunt. Sunt commodo consectetur proident qui. Magna pariatur ex nostrud commodo quis nisi deserunt reprehenderit Lorem. In occaecat nostrud aute qui laboris elit ut officia reprehenderit quis dolore nulla eiusmod laborum. Eu id dolore incididunt nostrud consequat. Aute ex est est labore elit ullamco tempor esse magna excepteur. Fugiat occaecat velit labore nulla id quis nisi. Cillum incididunt eu anim eu non aliqua dolor sunt anim minim consectetur incididunt. Qui cupidatat dolore ea aute commodo sint dolore eu dolore eiusmod. Incididunt nostrud sit nulla consequat ex eiusmod aliquip. Lorem laborum proident ad adipisicing consequat mollit enim culpa ullamco.',
      image: 'https://via.placeholder.com/200',
    },
    {
      model: 'producto-3',
      name: 'Producto 3',
      description:
        'Ut voluptate labore sint id esse aliqua. Cupidatat reprehenderit dolor esse voluptate commodo non cillum aliqua labore. Excepteur magna reprehenderit ut eu et do. Enim reprehenderit aliquip reprehenderit culpa adipisicing aliqua et Lorem incididunt. Sunt commodo consectetur proident qui. Magna pariatur ex nostrud commodo quis nisi deserunt reprehenderit Lorem. In occaecat nostrud aute qui laboris elit ut officia reprehenderit quis dolore nulla eiusmod laborum. Eu id dolore incididunt nostrud consequat. Aute ex est est labore elit ullamco tempor esse magna excepteur. Fugiat occaecat velit labore nulla id quis nisi. Cillum incididunt eu anim eu non aliqua dolor sunt anim minim consectetur incididunt. Qui cupidatat dolore ea aute commodo sint dolore eu dolore eiusmod. Incididunt nostrud sit nulla consequat ex eiusmod aliquip. Lorem laborum proident ad adipisicing consequat mollit enim culpa ullamco.',
      image: 'https://via.placeholder.com/200',
    },
    {
      model: 'producto-4',
      name: 'Producto 4',
      description:
        'Ut voluptate labore sint id esse aliqua. Cupidatat reprehenderit dolor esse voluptate commodo non cillum aliqua labore. Excepteur magna reprehenderit ut eu et do. Enim reprehenderit aliquip reprehenderit culpa adipisicing aliqua et Lorem incididunt. Sunt commodo consectetur proident qui. Magna pariatur ex nostrud commodo quis nisi deserunt reprehenderit Lorem. In occaecat nostrud aute qui laboris elit ut officia reprehenderit quis dolore nulla eiusmod laborum. Eu id dolore incididunt nostrud consequat. Aute ex est est labore elit ullamco tempor esse magna excepteur. Fugiat occaecat velit labore nulla id quis nisi. Cillum incididunt eu anim eu non aliqua dolor sunt anim minim consectetur incididunt. Qui cupidatat dolore ea aute commodo sint dolore eu dolore eiusmod. Incididunt nostrud sit nulla consequat ex eiusmod aliquip. Lorem laborum proident ad adipisicing consequat mollit enim culpa ullamco.',
      image: 'https://via.placeholder.com/200',
    },
    {
      model: 'producto-5',
      name: 'Producto 5',
      description:
        'Ut voluptate labore sint id esse aliqua. Cupidatat reprehenderit dolor esse voluptate commodo non cillum aliqua labore. Excepteur magna reprehenderit ut eu et do. Enim reprehenderit aliquip reprehenderit culpa adipisicing aliqua et Lorem incididunt. Sunt commodo consectetur proident qui. Magna pariatur ex nostrud commodo quis nisi deserunt reprehenderit Lorem. In occaecat nostrud aute qui laboris elit ut officia reprehenderit quis dolore nulla eiusmod laborum. Eu id dolore incididunt nostrud consequat. Aute ex est est labore elit ullamco tempor esse magna excepteur. Fugiat occaecat velit labore nulla id quis nisi. Cillum incididunt eu anim eu non aliqua dolor sunt anim minim consectetur incididunt. Qui cupidatat dolore ea aute commodo sint dolore eu dolore eiusmod. Incididunt nostrud sit nulla consequat ex eiusmod aliquip. Lorem laborum proident ad adipisicing consequat mollit enim culpa ullamco.',
      image: 'https://via.placeholder.com/200',
    },
    {
      model: 'producto-6',
      name: 'Producto 6',
      description:
        'Ut voluptate labore sint id esse aliqua. Cupidatat reprehenderit dolor esse voluptate commodo non cillum aliqua labore. Excepteur magna reprehenderit ut eu et do. Enim reprehenderit aliquip reprehenderit culpa adipisicing aliqua et Lorem incididunt. Sunt commodo consectetur proident qui. Magna pariatur ex nostrud commodo quis nisi deserunt reprehenderit Lorem. In occaecat nostrud aute qui laboris elit ut officia reprehenderit quis dolore nulla eiusmod laborum. Eu id dolore incididunt nostrud consequat. Aute ex est est labore elit ullamco tempor esse magna excepteur. Fugiat occaecat velit labore nulla id quis nisi. Cillum incididunt eu anim eu non aliqua dolor sunt anim minim consectetur incididunt. Qui cupidatat dolore ea aute commodo sint dolore eu dolore eiusmod. Incididunt nostrud sit nulla consequat ex eiusmod aliquip. Lorem laborum proident ad adipisicing consequat mollit enim culpa ullamco.',
      image: 'https://via.placeholder.com/200',
    },
  ];
  state.products = products;
};

initStore();

const getProductDetails = (model: string) => {
  return state.products.find((product) => product.model === model);
};

const getAllProductsCard = () => {
  return state.products.map((product) => {
    return {
      model: product.model,
      name: product.name,
      image: product.image,
    };
  });
};

const getAllProductPaths = () => {
  return state.products.map((product) => {
    return {
      params: {
        model: product.model,
      },
    };
  });
};

export { getProductDetails, getAllProductsCard, getAllProductPaths };
