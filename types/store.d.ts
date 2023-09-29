import { store } from "../src/app";

/**
 * @remark
 *
 * Во Feature-Sliced Design не допускается импорт из вышестоящего слоя
 * Так, в shared/lib/hooks/reduxHooks по документацией Redux:
 * https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 *
 * я был вынужден импортировать RootState и AppDispatch из app
 * Чтобы этого избежать, я решил сделать их глобальными
 */

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
