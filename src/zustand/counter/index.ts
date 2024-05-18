import { create } from 'zustand';

type Counter = {
	number: number;
	inc: () => void;
	dec: () => void;
};

const useCounter = create<Counter>()(set => ({
	number: 0,
	inc: () => set(state => ({ number: state.number + 1 })),
	dec: () => set(state => ({ number: state.number - 1 })),
}));

export default useCounter;
