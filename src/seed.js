// just change evertything with your own userId
import { doc, setDoc } from 'firebase/firestore'

export function seedDatabase(db) {
	setDoc(doc(db, 'users', process.env.REACT_APP_USER_ID), {
		username: 'mike',
		fullName: 'Michael Angelo',
		emailAddress: 'mikey@gmail.com',
		following: ['2'],
		followers: ['2', '3', '4', '5', '6'],
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'users', '2'), {
		username: 'ben',
		fullName: 'Benjamin Button',
		emailAddress: 'benadryl@sanzio.com',
		following: [],
		followers: [process.env.REACT_APP_USER_ID],
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'users', '3'), {
		username: 'bruce',
		fullName: 'Bruce Almighty',
		emailAddress: 'theymighty@ggg.com',
		following: [],
		followers: [process.env.REACT_APP_USER_ID],
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'users', '4'), {
		username: 'ian',
		fullName: 'Ian Holms',
		emailAddress: 'ilkthedark@risen.com',
		following: [],
		followers: [process.env.REACT_APP_USER_ID],
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'users', '5'), {
		username: 'joseph',
		fullName: 'Joseph Willcox',
		emailAddress: 'joy@joy.com',
		following: [],
		followers: [''],
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'users', '6'), {
		username: 'toa',
		fullName: 'Toa Anagonye',
		emailAddress: 'toki@waititi.com',
		following: [],
		followers: [''],
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'photos', '1'), {
		userId: '2',
		imageSrc: `/images/users/mike/1.jpg`,
		caption: 'The best car ever.',
		likes: [],
		comments: [
			{
				displayName: 'bruce',
				comment: 'Love this place, looks like my mountain shack!'
			},
			{
				displayName: 'joseph',
				comment: 'Would you like to give me a ride sometimes?'
			}
		],
		userLatitude: '40.7128°',
		userLongitude: '74.0060°',
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'photos', '2'), {
		userId: '2',
		imageSrc: `/images/users/mike/2.jpg`,
		caption: 'The best car ever.',
		likes: [],
		comments: [
			{
				displayName: 'ian',
				comment: 'Love this place, looks like my mountain shack!'
			},
			{
				displayName: 'joseph',
				comment: 'Would you like to give me a ride sometimes?'
			}
		],
		userLatitude: '40.7128°',
		userLongitude: '74.0060°',
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'photos', '3'), {
		userId: '2',
		imageSrc: `/images/users/mike/3.jpg`,
		caption: 'The best car ever.',
		likes: [],
		comments: [
			{
				displayName: 'bruce',
				comment: 'Love this place, looks like my mountain shack!'
			},
			{
				displayName: 'toa',
				comment: 'Would you like to give me a ride sometimes?'
			}
		],
		userLatitude: '40.7128°',
		userLongitude: '74.0060°',
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'photos', '4'), {
		userId: '2',
		imageSrc: `/images/users/mike/4.jpg`,
		caption: 'The best car ever.',
		likes: [],
		comments: [
			{
				displayName: 'toa',
				comment: 'Love this place, looks like my mountain shack!'
			},
			{
				displayName: 'joseph',
				comment: 'Would you like to give me a ride sometimes?'
			}
		],
		userLatitude: '40.7128°',
		userLongitude: '74.0060°',
		dateCreated: Date.now()
	})

	setDoc(doc(db, 'photos', '5'), {
		userId: '2',
		imageSrc: `/images/users/mike/5.jpg`,
		caption: 'The best car ever.',
		likes: [],
		comments: [
			{
				displayName: 'joseph',
				comment: 'Love this place, looks like my mountain shack!'
			},
			{
				displayName: 'toa',
				comment: 'Would you like to give me a ride sometimes?'
			}
		],
		userLatitude: '40.7128°',
		userLongitude: '74.0060°',
		dateCreated: Date.now()
	})
}
