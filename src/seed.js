// just change evertything with your own userId
import { doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export function seedDatabase(db) {
	const users = [
		{
			uid: process.env.REACT_APP_USER_ID,
			username: 'mike',
			fullName: 'Michael Angelo',
			emailAddress: 'mikey@gmail.com',
			following: ['2'],
			followers: ['2', '3', '4', '5', '6'],
			dateCreated: Date.now()
		},
		{
			uid: '2',
			username: 'ben',
			fullName: 'Benjamin Button',
			emailAddress: 'benadryl@sanzio.com',
			following: [],
			followers: [process.env.REACT_APP_USER_ID],
			dateCreated: Date.now()
		},
		{
			uid: '3',
			username: 'bruce',
			fullName: 'Bruce Almighty',
			emailAddress: 'theymighty@ggg.com',
			following: [],
			followers: [process.env.REACT_APP_USER_ID],
			dateCreated: Date.now()
		},
		{
			uid: '4',
			username: 'ian',
			fullName: 'Ian Holms',
			emailAddress: 'ilkthedark@risen.com',
			following: [],
			followers: [process.env.REACT_APP_USER_ID],
			dateCreated: Date.now()
		},
		{
			uid: '5',
			username: 'joseph',
			fullName: 'Joseph Willcox',
			emailAddress: 'joy@joy.com',
			following: [],
			followers: [''],
			dateCreated: Date.now()
		},
		{
			uid: '6',
			username: 'toa',
			fullName: 'Toa Anagonye',
			emailAddress: 'toki@waititi.com',
			following: [],
			followers: [''],
			dateCreated: Date.now()
		}
	]

	// eslint-disable-next-line prefer-const
	for (let k = 0; k < users.length; k++) {
		getAuth().createUser(users[k])
	}

	// eslint-disable-next-line prefer-const
	for (let i = 1; i <= 5; ++i) {
		setDoc(doc(db, 'photos', i), {
			photoId: i,
			userId: '2',
			imageSrc: `/images/users/mike/${i}.jpg`,
			caption: 'The best car ever.',
			likes: [],
			comments: [
				{
					displayName: 'ben',
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
	}
}
