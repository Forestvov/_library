export default function convertErrors(errors) {
	return Object.fromEntries(Object.entries(errors || {}).map(([name, value]) => [name, value[0]]));
}