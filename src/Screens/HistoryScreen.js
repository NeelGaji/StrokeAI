import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } 
	from 'react-native';

const HistoryScreen = () => {
	const [showCard, setShowCard] = useState(false);

	const handleButtonClick = () => {
		setShowCard(!showCard);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleButtonClick} 
							style={styles.button}>
				<Text style={styles.buttonText}>
					Box Shadow
				</Text>
			</TouchableOpacity>

			{showCard && (
				<View style={styles.cardContainer}>
					<Text style={styles.heading}>
						Welcome To Geeksforgeeks
					</Text>
					<Text style={styles.paragraph}>
						A Computer Science portal for geeks. 
						It contains well written, well thought 
						and well explained computer science and 
						programming articles
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F5F5F5',
	},
	button: {
		backgroundColor: 'green',
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		marginBottom: 16,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	cardContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		padding: 16,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 10, // Required for Android
		width: 350,
		height: 350,
	},
	heading: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 8,
		color: 'green',
		alignItems: 'center',
	},
	paragraph: {
		fontSize: 17,
		lineHeight: 24,
	},
});

export default HistoryScreen;
