import { ClipboardExamplePage } from '../features/clipboard/views/clipboard-example-page';
import NxWelcome from '../nx-welcome';

export const appRoutes = [
  {
    path: '',
    index: true,
    element: <NxWelcome title="example" />,
  },
  {
    path: '/clipboard',
    element: <ClipboardExamplePage />,
  },
];
