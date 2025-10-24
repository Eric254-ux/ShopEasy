import { Schema, model, Document } from 'mongoose';

const CartItemSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true, min: 1, default: 1 },
    price: { type: Number, required: true }, // Price at the time of adding to cart
    name: { type: String, required: true }
});

const CartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [CartItemSchema],
    totalAmount: { type: Number, default: 0 }
}, { timestamps: true });

export interface ICartItem extends Document {
    productId: string;
    quantity: number;
    price: number;
    name: string;
}

export interface ICart extends Document {
    userId: string;
    items: ICartItem[];
    totalAmount: number;
}

export default model<ICart>('Cart', CartSchema);