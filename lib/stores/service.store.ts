import type { ServiceModel } from '../models';

const state = {
  services: [
    {
      id: '',
      name: '',
      description: '',
    },
  ],
};

const initStore = () => {
  const services: ServiceModel[] = [
    {
      id: 'service-1',
      name: 'Service 1',
      description:
        'Commodo eiusmod in incididunt amet irure aute excepteur et occaecat amet minim sint culpa mollit. Officia ea ut minim elit magna. Dolore elit ut laborum nostrud magna eu. Esse Lorem deserunt Lorem qui esse. Excepteur id proident aute nulla ea et ea occaecat veniam.Voluptate proident sunt proident proident ad excepteur magna esse. Labore dolore aute laboris consectetur id aliqua. Aute esse consectetur cillum sit esse exercitation velit sunt deserunt do. Amet quis nulla non veniam. Lorem proident tempor occaecat nostrud qui amet aute Lorem ullamco do laborum dolore. Incididunt culpa voluptate nulla velit magna sit laborum. Anim ut do dolore velit minim nostrud elit adipisicing proident eu id mollit.Velit Lorem laborum ipsum adipisicing ex aliqua cupidatat ipsum officia. Nisi enim labore voluptate irure proident labore non nulla proident ullamco minim officia. Consequat Lorem magna voluptate exercitation et est sit eu tempor irure occaecat ipsum aliquip cupidatat. Ipsum deserunt mollit laboris est est duis. Anim quis amet sunt velit sint ad dolore tempor qui amet. Est reprehenderit fugiat eiusmod labore duis do ut occaecat duis dolore qui qui do. Irure irure qui est dolore dolore mollit reprehenderit eiusmod aliqua.',
    },
    {
      id: 'service-2',
      name: 'Service 2',
      description:
        'Commodo eiusmod in incididunt amet irure aute excepteur et occaecat amet minim sint culpa mollit. Officia ea ut minim elit magna. Dolore elit ut laborum nostrud magna eu. Esse Lorem deserunt Lorem qui esse. Excepteur id proident aute nulla ea et ea occaecat veniam.Voluptate proident sunt proident proident ad excepteur magna esse. Labore dolore aute laboris consectetur id aliqua. Aute esse consectetur cillum sit esse exercitation velit sunt deserunt do. Amet quis nulla non veniam. Lorem proident tempor occaecat nostrud qui amet aute Lorem ullamco do laborum dolore. Incididunt culpa voluptate nulla velit magna sit laborum. Anim ut do dolore velit minim nostrud elit adipisicing proident eu id mollit.Velit Lorem laborum ipsum adipisicing ex aliqua cupidatat ipsum officia. Nisi enim labore voluptate irure proident labore non nulla proident ullamco minim officia. Consequat Lorem magna voluptate exercitation et est sit eu tempor irure occaecat ipsum aliquip cupidatat. Ipsum deserunt mollit laboris est est duis. Anim quis amet sunt velit sint ad dolore tempor qui amet. Est reprehenderit fugiat eiusmod labore duis do ut occaecat duis dolore qui qui do. Irure irure qui est dolore dolore mollit reprehenderit eiusmod aliqua.',
    },
    {
      id: 'service-3',
      name: 'Service 3',
      description:
        'Commodo eiusmod in incididunt amet irure aute excepteur et occaecat amet minim sint culpa mollit. Officia ea ut minim elit magna. Dolore elit ut laborum nostrud magna eu. Esse Lorem deserunt Lorem qui esse. Excepteur id proident aute nulla ea et ea occaecat veniam.Voluptate proident sunt proident proident ad excepteur magna esse. Labore dolore aute laboris consectetur id aliqua. Aute esse consectetur cillum sit esse exercitation velit sunt deserunt do. Amet quis nulla non veniam. Lorem proident tempor occaecat nostrud qui amet aute Lorem ullamco do laborum dolore. Incididunt culpa voluptate nulla velit magna sit laborum. Anim ut do dolore velit minim nostrud elit adipisicing proident eu id mollit.Velit Lorem laborum ipsum adipisicing ex aliqua cupidatat ipsum officia. Nisi enim labore voluptate irure proident labore non nulla proident ullamco minim officia. Consequat Lorem magna voluptate exercitation et est sit eu tempor irure occaecat ipsum aliquip cupidatat. Ipsum deserunt mollit laboris est est duis. Anim quis amet sunt velit sint ad dolore tempor qui amet. Est reprehenderit fugiat eiusmod labore duis do ut occaecat duis dolore qui qui do. Irure irure qui est dolore dolore mollit reprehenderit eiusmod aliqua.',
    },
    {
      id: 'service-4',
      name: 'Service 4',
      description:
        'Commodo eiusmod in incididunt amet irure aute excepteur et occaecat amet minim sint culpa mollit. Officia ea ut minim elit magna. Dolore elit ut laborum nostrud magna eu. Esse Lorem deserunt Lorem qui esse. Excepteur id proident aute nulla ea et ea occaecat veniam.Voluptate proident sunt proident proident ad excepteur magna esse. Labore dolore aute laboris consectetur id aliqua. Aute esse consectetur cillum sit esse exercitation velit sunt deserunt do. Amet quis nulla non veniam. Lorem proident tempor occaecat nostrud qui amet aute Lorem ullamco do laborum dolore. Incididunt culpa voluptate nulla velit magna sit laborum. Anim ut do dolore velit minim nostrud elit adipisicing proident eu id mollit.Velit Lorem laborum ipsum adipisicing ex aliqua cupidatat ipsum officia. Nisi enim labore voluptate irure proident labore non nulla proident ullamco minim officia. Consequat Lorem magna voluptate exercitation et est sit eu tempor irure occaecat ipsum aliquip cupidatat. Ipsum deserunt mollit laboris est est duis. Anim quis amet sunt velit sint ad dolore tempor qui amet. Est reprehenderit fugiat eiusmod labore duis do ut occaecat duis dolore qui qui do. Irure irure qui est dolore dolore mollit reprehenderit eiusmod aliqua.',
    },
  ];

  state.services = services;
};

initStore();

const getAllServices = () => {
  return state.services;
};

export { getAllServices };
