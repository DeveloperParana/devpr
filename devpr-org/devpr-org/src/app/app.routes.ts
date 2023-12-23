import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-conf',
    loadChildren: () =>
      import('@devpr/feature-conf').then((m) => m.featureConfRoutes),
  },
  {
    path: 'feature-jobs',
    loadChildren: () =>
      import('@devpr/feature-jobs').then((m) => m.featureJobsRoutes),
  },
];
