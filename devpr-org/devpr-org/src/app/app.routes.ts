import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'DevPR',
    loadChildren: () =>
    import('@devpr/feature-home').then((m) => m.featureHomeRoutes),
  },
  {
    path: 'feature-conf',
    title: 'DevPR Conf 2024',
    loadChildren: () =>
    import('@devpr/feature-conf').then((m) => m.featureConfRoutes),
  },
  {
    path: 'feature-jobs',
    title: 'Procurando trabalho?',
    loadChildren: () =>
    import('@devpr/feature-jobs').then((m) => m.featureJobsRoutes),
  },
  {
    path: 'feature-adm',
    title: 'Acesso para administrador',
    loadChildren: () =>
    import('@devpr/feature-adm').then((m) => m.featureAdmRoutes),
  },
];
