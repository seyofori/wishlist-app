import { types } from "mobx-state-tree"

export const WishListItem = types
	.model({
		name: types.string,
		price: types.number,
		image: "",
	})
	.actions(self => ({
		setName(newName) {
			self.name = newName
		},
		setPrice(newPrice) {
			self.price = newPrice
		},
	}))

export const WishList = types
	.model({
		items: types.optional(types.array(WishListItem), []),
	})
	.actions(self => ({
		addItem(newItem) {
			self.items.push(newItem)
		},
	}))
