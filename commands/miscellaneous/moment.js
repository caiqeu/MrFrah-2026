module.exports = (async) => {
	const input = await message.channel.awaitMessages(m => m.author.id === message.author.id, {
	max: 4,
	time: 10e3,
	errors: ['time'],
});
const date = moment(input.first().content);

if (date.isValid()) {
	const now = moment();
	const duration = date - now;
	const formatted = moment.duration(duration, 'ms').format();

	if (duration > 0) {
		message.channel.send(`The date you gave me is ${formatted} into the future.`);
	} else {
		message.channel.send(`The date you gave me is ${formatted} into the past.`);
	}
} else {
	message.channel.send('You didn\'t give me a valid date.');
}
	}