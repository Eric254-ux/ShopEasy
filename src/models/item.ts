export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export class ItemModel {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(itemId: string): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItems(): Item[] {
        return this.items;
    }

    findItemById(itemId: string): Item | undefined {
        return this.items.find(item => item.id === itemId);
    }
}