import { WishListItem, WishList } from "./WishList"
import { getSnapshot } from "mobx-state-tree"

it("can create an instance of WishList item", () => {
	//create an item, and then check if the created item is an instance of wishlist, and it has the correct properties
	//also test if the image defaults to an empty string
	const item = WishListItem.create({
		name: "Test Item Name",
		price: 10,
	})

	expect(item.price).toBe(10)
	expect(item.image).toBe("")

	item.setPrice(25)

	expect(item.price).toBe(25)
})

it("can set name of a WishList item", () => {
	const initialItem = WishListItem.create({ name: "Name 1", price: 10 })
	initialItem.setName("Name 2")

	expect(initialItem.name).toBe("Name 2")
})

it("can create an instance of WishList", () => {
	const item = WishList.create({
		items: [
			{
				name: "Test item 1",
				price: 10,
			},
			{ name: "Test item 2", price: 15 },
		],
	})

	expect(item.items.length).toBe(2)
	expect(item.items[0].price).toBe(10)
	expect(item.items[1].image).toBe("")

	item.addItem(WishListItem.create({ name: "test item 3", price: 25 }))
	expect(item.items.length).toBe(3)
	expect(item.items[2].name).toBe("test item 3")

	item.items[2].setName("test name 3")
	expect(item.items[2].name).toBe("test name 3")

	expect(getSnapshot(item)).toMatchSnapshot()
})
