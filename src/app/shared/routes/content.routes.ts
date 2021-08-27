import { Routes, RouterModule} from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const Content_Routes: Routes = [
    {
        path: 'custom',
        loadChildren: () => import('../../components/custom/custom.module').then(m => m.CustomModule)
    },
]

export const Message_Routes: Routes = [
    {
        path: 'alert-pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'custom-pages',
        loadChildren: () => import('../../components/custom/custom.module').then(m => m.CustomModule)
    },
]

export const Error_Routes: Routes = [
    
]