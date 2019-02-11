const mongoose = require('mongoose')

if (process.argv.length < 3) {
	console.log('give password as argument')
	process.exit(1)
}

const password = process.argv[2]

const url = `mongodb://fullstack-user:${password}@ds129532.mlab.com:29532/fullstack2019_osa3`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
	const personName = process.argv[3]
	const personNumber = process.argv[4]

	const person = new Person({
		name: personName,
		number: personNumber,
	})

	person.save().then(result => {
		console.log(`lisätään ${personName} numero ${personNumber} luetteloon`)
		mongoose.connection.close()
	})
}

if (process.argv.length === 3) {
	Person.find({}).then(result => {
		console.log('puhelinluettelo:')
		result.forEach(person => {
			console.log(`${person.name} ${person.number}`)
		})
		mongoose.connection.close()
	})
}

