import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface IComponentRenderOption {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export function ComponentRender(component: ReactNode, options: IComponentRenderOption = {}) {
  const { route = '/', initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
