import { Container } from '@/components/layout';
import { TextComponent } from '@/components/text';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import useAccountController from './controller';
import { ComponentType, TTypeComponent } from './types';

type ExtendTextTestProps = {
	name?: string;
	ager?: number;
};

type TextTestProps<T extends ExtendTextTestProps> = {
	content: T;
};

const TextTest = <T extends ExtendTextTestProps>({
	content,
}: TextTestProps<T>) => {
	const [textRender, setTextRender] = useState<string>('');
	useEffect(() => {
		if (typeof content.name !== 'string') {
			setTextRender('non of string');
		} else {
			setTextRender(content.name);
		}
	}, [content]);
	return <TextComponent text={textRender} color='red' />;
};

const AccountScreen = () => {
	const [text, setText] = useState<any>(null);

	const data = ['dat', 'Dang', 'Ba'] as const;
	const type: ComponentType = TTypeComponent.PRO;
	const { values } = useAccountController<typeof data, ComponentType>(
		data,
		type,
	);
	// cách dùng generic type cho function nếu như trả về kiểu T luôn thì thay thế void bằng T
	const consoleLog = <T,>(arg: T): void => {
		setText(arg);
	};

	console.log('🚀 ~ AccountScreen ~ values:', values);
	useEffect(() => {
		// consoleLog<string>('1000');
		consoleLog<number>(1000);
	}, []);

	// const { dec, inc, number } = useCounter();
	return (
		<Container>
			<TextComponent text={text ?? ''} />
			<TextTest content={{ name: 'dat', ager: 23 }} />
		</Container>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({});
