import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-jobs',
    loadChildren: () =>
      import('@devpr/feature-jobs').then((m) => m.featureJobsRoutes),
  },
];
