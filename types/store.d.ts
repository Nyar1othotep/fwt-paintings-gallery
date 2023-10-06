import { store } from "../src/app";

/**
 * @remark
 *
 * В Feature-Sliced Design не допускается импорт из вышестоящего слоя.
 * Так, в shared/lib/hooks/reduxHooks я был вынужден импортировать RootState
 * и AppDispatch из app:
 * https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 *
 * Чтобы этого избежать, я решил сделать их глобальными
 */

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
