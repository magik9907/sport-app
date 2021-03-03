function Favorite({ list, name }: { list: Array<number> | string; name: string }) {
	if (list.length === 0 || list === '')
		return (
			<div>
        <p>Favorite {name}</p>
				<p>You don't have favorite {name}</p>
			</div>
		)
	return <div>a</div>
}

export default Favorite