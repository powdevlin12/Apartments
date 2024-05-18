import { TTypeComponent } from './types';

const useAccountController = <T, K>(data: T, typeComponent: K) => {
	return {
		values: typeComponent === TTypeComponent.PRO ? data : 'no data',
	};
};

export default useAccountController;
